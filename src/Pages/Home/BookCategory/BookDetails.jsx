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
                        <button className="btn btn-primary ml-5">Borrow</button>
                        <button className="btn btn-primary ml-5">Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;