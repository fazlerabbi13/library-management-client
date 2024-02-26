
import BorrorwedBook from "../components/BorrorwedBook";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const BorrowedBooks = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    const [ borrowedBooks, setBorrowedBooks] = useState();
    
    useEffect(() =>{
        fetch( `http://localhost:5000/borrowedbooks?email=${user?.email}`, {credentials:"include"}) 
        .then(res =>res.json())
        .then(data => setBorrowedBooks(data))
        .catch(error =>console.log(error))
    },[user?.email])
    console.log(borrowedBooks)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-5">
            {
                borrowedBooks?.map(borrowedBook =>
                     <BorrorwedBook
                      key={borrowedBook._id}
                       borrowedBook={borrowedBook}
                       ></BorrorwedBook>)
            }
        </div>
    );
};

export default BorrowedBooks;