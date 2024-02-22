import { useEffect, useState } from "react";
import AllBook from "../components/AllBook";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import '../Utility/paigination.css'
const AllBooks = () => {
    const [allbooks, setAllBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    console.log(allbooks)
    console.log(currentPage)
    const { total } = useLoaderData();
    console.log(total)


    const limit = 10;
    const pageNumber = Math.ceil(total / limit);
    console.log(pageNumber)

    const pages = [...Array(pageNumber).keys()];
    console.log(pages)

    // all book loaded here
    useEffect(() => {
        axios.get(`http://localhost:5000/addedbooks?page=${currentPage}&limit=${itemsPerPage}`)
            .then(res => {
                setAllBooks(res.data)
            })
    }, [currentPage,itemsPerPage])

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if(currentPage < pages.length){
            setCurrentPage(currentPage+1)
        }
    }



    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-10 gap-5">
                {
                    allbooks.map(book => <AllBook key={book._id} book={book}></AllBook>)
                }
            </div>
            <div className="text-center">
                <div className="join mx-auto mt-10">
                    <input onClick={handlePrevious} className="join-item btn btn-square" type="radio" name="options" aria-label="<" />

                    <div>
                        {
                            pages.map((page) => 
                            <button key={page} 
                            onClick={() => setCurrentPage(page)}
                             className={'join-item btn'}>{page}</button>)
                        }
                    </div>

                    <input onClick={handleNext} className="join-item btn btn-square" type="radio" name="options" aria-label=">" />
                </div>
            </div>
        </div>
    );
};

export default AllBooks;                                 