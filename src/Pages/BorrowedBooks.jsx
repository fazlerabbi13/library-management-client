
import BorrorwedBook from "../components/BorrorwedBook";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const BorrowedBooks = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    console.log(borrowedBooks)

    useEffect(() => {
        fetch(`https://library-management-server-eight.vercel.app/borrowedbooks?email=${user?.email}`, { credentials: "include" })
            .then(res => res.json())
            .then(data => setBorrowedBooks(data))
        // .catch(error =>console.log(error))
    }, [user?.email])
    console.log(borrowedBooks)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-5">
            {
                borrowedBooks?.map(borrowedBook =>
                    <BorrorwedBook
                        key={borrowedBook._id}
                        borrowedBook={borrowedBook}
                        borrowedBooks={borrowedBooks}
                        setBorrowedBooks={setBorrowedBooks}
                    ></BorrorwedBook>)
            }
        </div>
    );
};

export default BorrowedBooks;