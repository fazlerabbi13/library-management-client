import { useLoaderData } from "react-router-dom";
import CategoryBook from "./CategoryBook";

const CategoryBooks = () => {
    const categoryBooks = useLoaderData();
    console.log(categoryBooks);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                categoryBooks?.map(categoryBook => <CategoryBook key={categoryBook._id} categoryBook={categoryBook}></CategoryBook>)
            }
        </div>
    );
};

export default CategoryBooks;