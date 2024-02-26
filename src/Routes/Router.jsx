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
import CategoryBooks from "../components/CategoryBooks";
import BookDetails from "../Pages/Home/BookCategory/BookDetails";
import UpdateBook from "../components/UpdateBook";



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
                element: <PrivetRoute><AllBooks></AllBooks></PrivetRoute>,
                loader: () => fetch('http://localhost:5000/bookcount')
            },
            {
                path: '/borrowedbooks',
                element: <PrivetRoute><BorrowedBooks></BorrowedBooks></PrivetRoute>,
                // loader: () => fetch('http://localhost:5000/borrowedbooks')
            },
            {
                path:'/updatebook/:id',
                element: <PrivetRoute><UpdateBook></UpdateBook></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/addedbooks/update/${params.id}`)
            },
            {
                path:'/relatedbooks/:category',
                element:<PrivetRoute><CategoryBooks></CategoryBooks></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/addedbooks/category/${params.category}`)
            },
            {
                path:'/bookdetails/:bookName',
                element: <PrivetRoute><BookDetails></BookDetails></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/addedbooks/bookdetails/${params.bookName}`)
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