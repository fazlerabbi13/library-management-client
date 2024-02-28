import { useEffect, useState } from "react";
import AllBook from "../components/AllBook";
import axios from "axios";


const AllBooks = () => {
    const [allbooks, setAllBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(allbooks);

    console.log(allbooks)

    
    // all book loaded here
    useEffect(() => {
        axios.get(`https://library-management-server-eight.vercel.app/addedbooks?category=${selectedCategory}`)
            .then(res => {
                setAllBooks(res.data)
            })
    }, [ selectedCategory])




    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div>
            <div className="flex justify-center">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Pick the best fantasy franchise</span>
                        <span className="label-text-alt">Alt label</span>
                    </div>
                    <select value={setSelectedCategory} onChange={handleCategoryChange} className="select select-bordered">
                        <option className="text-2xl" selected>select one</option>
                        <option value="Biographies">Biographies</option>
                        <option value="Motivational">Motivational</option>
                        <option value="Business">Business</option>
                        <option value="Computer and Tech">Computer and Tech</option>
                        <option value="History">History</option>
                        <option value="Sci-Fi and Fentasy">Sci-Fi and Fentasy</option>
                    </select>
                    <div className="label">
                        <span className="label-text-alt">Alt label</span>
                        <span className="label-text-alt">Alt label</span>
                    </div>
                </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-10 gap-5">
                {
                    allbooks.map(book => <AllBook key={book._id} book={book}></AllBook>)
                }
            </div>
           
        </div>
    );
};

export default AllBooks;                                 