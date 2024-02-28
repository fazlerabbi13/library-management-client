import { useEffect, useState } from "react";


const useBookCategory = () => {
    const [categories, setCategories] = useState([]);
    

    useEffect(() => {
        fetch('https://library-management-server-eight.vercel.app/bookcategory', {credentials:"include"})
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return categories;
};

export default useBookCategory;