import AllBook from "../components/AllBook";
import useAllBooks from "../hooks/useAllBooks";

const AllBooks = () => {
    const allbooks = useAllBooks();
    console.log(allbooks)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-10 gap-5">
           {
            allbooks.map(book => <AllBook key={book._id} book={book}></AllBook>)
           }
        </div>
    );
};

export default AllBooks;                                 