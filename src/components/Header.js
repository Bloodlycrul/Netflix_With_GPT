import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { LOGO, USERPROFILE } from "../utils/constant";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleUser = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      dispatch(removeUser());
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className={`flex items-center justify-between px-4 bg-transparent  w-full absolute  z-30  `}
      >
        <React.Fragment>
          <img
            className="relative w-[200px] h-auto z-10"
            src={LOGO}
            alt="logo"
          />
        </React.Fragment>

        <div className="flex items-center text-white">
          {user === null ? (
            ""
          ) : (
            <>
              <h2>{user.displayName}</h2>
              <img
                className="rounded-[50%] w-[50px] h-[50px] mx-3 object-cover"
                src={USERPROFILE}
                alt="profile"
              />
            </>
          )}
          {user && (
            <button onClick={handleUser} className="text-white">
              "Sign Out"
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
