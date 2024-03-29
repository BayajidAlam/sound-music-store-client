import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Category/Category";
import ViewDetails from "../../components/ViewDetails/ViewDetails";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Second from "../../Layout/Second";
import About from "../../Pages/About/About";
import AddAProduct from "../../Pages/AddAProduct/AddAProduct";
import Blogs from "../../Pages/Blogs/Blogs";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import ReportedItem from "../../Pages/Dashboard/ReportedItem/ReportedItem";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import PaymentFail from "../../Pages/PaymentFail/PaymentFail";
import PaymentSuceess from "../../Pages/PyamentSuccess/PaymentSuceess";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:name",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://sound-music-server.onrender.com/category?name=${params.name}`
          ),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sound-music-server.onrender.com/viewDetails?id=${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/payment/success",
        element: <PaymentSuceess />,
      },
      {
        path: "payment/fail",
        element: <PaymentFail />,
      },
      {
        path: "/about",
        element: <About />,
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
  {
    path: "/v3/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/v3/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/v3/dashboard/myOrder",
        element: (
          <BuyerRoute>
            <MyOrders />
          </BuyerRoute>
        ),
      },
      {
        path: "/v3/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddAProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/v3/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/v3/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers />
          </AdminRoute>
        ),
      },
      {
        path: "/v3/dashboard/addAProduct",
        element: (
          <SellerRoute>
            <AddAProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/v3/dashboard/myProduct",
        element: (
          <SellerRoute>
            <MyProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/v3/dashboard/myBuyer",
        element: (
          <SellerRoute>
            <MyBuyers />
          </SellerRoute>
        ),
      },
      {
        path: "/v3/dashboard/reported",
        element: (
          <AdminRoute>
            <ReportedItem />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
