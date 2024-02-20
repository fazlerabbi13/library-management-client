import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import AddBooks from "../Pages/AddBooks";
import AllBooks from "../Pages/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home/Home/Home";
import PrivetRoute from "../Provider/PrivetRoute";
import UpdateProduct from "../components/UpdateBook";

const Router = createBrowserRouter([
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
                path: '/addbooks',
                element: <PrivetRoute><AddBooks></AddBooks></PrivetRoute>
            },
            {
                path: '/allbooks',
                element: <PrivetRoute><AllBooks></AllBooks></PrivetRoute>
            },
            {
                path: '/borrowedbooks',
                element: <PrivetRoute><BorrowedBooks></BorrowedBooks></PrivetRoute>
            },
            {
                path:'/updatebook/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader: () => fetch(`http://localhost:5000/addedbooks`)
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])

export default Router;