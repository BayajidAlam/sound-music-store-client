import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Second from "../../Layout/Second";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/v2",
    element: <Second></Second>,
    children: [
      {
        path: "/v2/login",
        element: <Login />,
      },
      {
        path: "/v2/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
