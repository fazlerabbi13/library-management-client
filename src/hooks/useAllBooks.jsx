import { useEffect, useState } from "react";
const useAllBooks = () => {
    const [allbooks, setAllBooks] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/addedbooks')
        .then(res =>res.json())
        .then(data => setAllBooks(data))
    },[])

    return allbooks;
};

export default useAllBooks;