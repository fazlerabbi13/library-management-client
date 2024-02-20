import { Link } from "react-router-dom";

const AllBook = ({ book }) => {
    const {_id, authorName, image, bookName, rating, category } = book;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-48 h-56" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{bookName}</h2>
                <h3>{authorName}</h3>
                <h3>{category}</h3>
                <div className="card-actions">
                    <Link to={`/updatebook/${_id}`}><button className="btn btn-primary btn-wide">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllBook;   