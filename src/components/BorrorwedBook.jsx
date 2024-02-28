
import Swal from "sweetalert2";


const BorrorwedBook = ({ borrowedBook,borrowedBooks, setBorrowedBooks }) => {
    const { _id, image, authorName, bookName, borrowedDate, returnDate, category, rating } = borrowedBook;



    const handleReturn = (id) => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, return it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://library-management-server-eight.vercel.app/borrowedbooks/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Return!",
                                text: "Your borrowed book has been return.",
                                icon: "success"
                            });

                            const remainingBooks = borrowedBooks.filter(returnBook => returnBook._id !== id)
                            
                            setBorrowedBooks(remainingBooks);

                        }

                    })

            }
        });
    }


    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-72 w-64" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{authorName}</h2>
                <h3>{bookName}</h3>
                <h3>{category}</h3>
                <p>Borrowed Date: {borrowedDate}</p>
                <p>Return Date: {returnDate}</p>
                <div className="flex justify-center items-center gap-2"><p>{rating}</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div className="card-actions">
                    <button onClick={() => handleReturn(borrowedBook._id)} className="btn btn-primary">Return</button>
                </div>
            </div>
        </div>
    );
};

export default BorrorwedBook;