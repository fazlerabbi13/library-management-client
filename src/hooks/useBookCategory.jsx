import { useEffect, useState } from "react";


const useBookCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookcategory')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return categories;
};

export default useBookCategory;