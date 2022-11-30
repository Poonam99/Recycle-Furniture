import Blog from "../../Blog/Blog";
import AllBuyer from "../../Dashboard/Admin/AllBuyer";
import AllSeller from "../../Dashboard/Admin/AllSeller";
import ReportedProducts from "../../Dashboard/Admin/ReportedProducts";
import MyOrders from "../../Dashboard/Buyer/MyOrders";
import AddProduct from "../../Dashboard/Seller/AddProduct/AddProduct";
import MyProducts from "../../Dashboard/Seller/MyProducts/MyProducts";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home/Home";
import DashboardLayout from "../../Layout/DashboardLayout";
import Payment from "../../Payment/Payment/Payment";
import Products from "../../Products/Products";
import Login from "../../User/Login/Login";
import Signup from "../../User/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../usersRoute/AdminRoute/AdminRoute";
import BuyerRoute from "../usersRoute/BuyerRoute/BuyerRoute";
import SellerRoute from "../usersRoute/SellerRoute/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: `/catagory/:catagory`,
                element: <PrivateRoute><Products></Products></PrivateRoute>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/allreportedproducts',
                element: <AdminRoute><ReportedProducts></ReportedProducts></AdminRoute>
            },
            {
                path: '/dashboard/MyProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/MyOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/MyOrders/payment/:id',
                element: <Payment></Payment>
            }
        ]
    }
])