import Accordian from "../Accordian/Accordian";
import Banner from "../Banner/Banner";
import BookCategories from "../BookCategory/BookCategories";
import BookCategory from "../BookCategory/BookCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mt-16 mx-auto">
                <BookCategories></BookCategories>
                <Accordian></Accordian>
            </div>
        </div>
    );
};

export default Home;