import { useLoaderData } from "react-router-dom";


const BookDetails = () => {
    const bookDetails = useLoaderData();
    console.log(bookDetails);
    const { image, short } = bookDetails;
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
                                    <form className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Return Date</span>
                                            </label>
                                            <input type="date" placeholder="select return date" className="input input-bordered" required />
                                        </div>
            
                                    </form>
                                    <form className="text-center" method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-primary">Submit</button>
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