import { useLoaderData } from "react-router-dom";
import BorrorwedBook from "../components/BorrorwedBook";
import Swal from "sweetalert2";
import { useState } from "react";

const BorrowedBooks = () => {
    const borrowedBooks = useLoaderData();
    console.log(borrowedBooks);

    const [returnBooks, setReturnBooks] = useState();

    const handleReturn = (id) => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/borrowedbooks/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your cart has been deleted.",
                                icon: "success"
                            });

                            const remainingBooks = returnBooks.filter(returnBook => returnBook._id !== id)
                            setReturnBooks(remainingBooks);

                        }

                    })

            }
        });
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-5">
            {
                borrowedBooks.map(borrowedBook =>
                     <BorrorwedBook
                      key={borrowedBook._id}
                       borrowedBook={borrowedBook}
                       ></BorrorwedBook>)
            }
        </div>
    );
};

export default BorrowedBooks;