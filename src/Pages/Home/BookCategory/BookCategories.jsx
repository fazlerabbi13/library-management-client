
import BookCategory from "./BookCategory";
import useBookCategory from "../../../hooks/useBookCategory";

const BookCategories = () => {
    const categories = useBookCategory()
    console.log(categories)
    return (
        <>
            <div className="text-center mt-10">
                <h1 className="text-5xl font-semibold">Our All Book Category</h1>
                <p className="text-xl mt-5">Choice your favorite category and read one by one.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
                {
                    categories.map(categoryOne => <BookCategory key={categoryOne._id} categoryOne={categoryOne}></BookCategory>)
                }
            </div>
        </>

    );
};

export default BookCategories;