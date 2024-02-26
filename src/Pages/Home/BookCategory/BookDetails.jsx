import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";


const BookDetails = () => {
    
   
    const [borrowedDate, setBorrorwedDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const {user} = useContext(AuthContext)
    console.log(user)
    const userName =user?.displayName
    const userEmail =user?.email
    const bookDetails = useLoaderData();
    console.log(bookDetails);

    const { image, short, authorName, bookName, rating, category } = bookDetails;

    const handleBorrow = () => {
        

        const borrowedbooks = {
            userName,userEmail, borrowedDate,returnDate,authorName, bookName, image, short, rating, category
        }
        console.log(borrowedbooks)
        fetch(`http://localhost:5000/borrowedbooks`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(borrowedbooks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Book borrowed successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <p className="py-6">{short}</p>
                    <div>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_1').showModal()}>Borrow</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-center mb-5">Borrow your book</h3>
                                <div className="card shrink-0 w-full max-w-s ">
                                    <form  className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" defaultValue={userName}  name="name" placeholder="name" className="input input-bordered" disabled/>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" defaultValue={userEmail} name="email" placeholder="email" className="input input-bordered" disabled />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Borrowed Date</span>
                                            </label>
                                            <input type="date"  onChange={(e) => setBorrorwedDate(e.target.value)} name="borrowedDate" placeholder="select return date" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Return Date</span>
                                            </label>
                                            <input type="date"  onChange={(e) => setReturnDate(e.target.value)} name="returnDate" placeholder="select return date" className="input input-bordered" required />
                                        </div>

                                    </form>
                                    <form className="text-center" method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button onClick={handleBorrow} className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <button className="btn btn-primary ml-5">Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;