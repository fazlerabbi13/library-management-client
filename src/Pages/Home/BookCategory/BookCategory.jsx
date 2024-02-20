
const BookCategory = ({ categoryOne }) => {
    const {image, category} = categoryOne;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 ">
                <img src={image} alt="Shoes" className="rounded-xl w-52 h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category}</h2>
                <div className="card-actions">
                    <button className="btn btn-primary btn-wide">See Related</button>
                </div>
            </div>
        </div>
    );
};

export default BookCategory;