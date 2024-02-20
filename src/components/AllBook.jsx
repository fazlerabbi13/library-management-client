
const AllBook = ({ book }) => {
    const { AuthorName, Image, BookName, Rating, Category } = book;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={Image} alt="Shoes" className="rounded-xl w-48 h-56" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{BookName}</h2>
                <h3>{AuthorName}</h3>
                <h3>{Category}</h3>
                <div className="card-actions">
                    <button className="btn btn-primary btn-wide">Update</button>
                </div>
            </div>
        </div>
    );
};

export default AllBook;   