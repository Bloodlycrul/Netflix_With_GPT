import "./App.css";
import Login from "./components/Login";
import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import "./utils/firebase";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./components/Browser";


// Your component code here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browser",
    element: <Browser />,
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router}>
        <div className="App">
          <Login />
        </div>
      </RouterProvider>
    </Provider>
  );
}

export default App;
