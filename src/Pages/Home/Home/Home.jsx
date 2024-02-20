import Accordian from "../Accordian/Accordian";
import Banner from "../Banner/Banner";
import BookCategories from "../BookCategory/BookCategories";
import BookCategory from "../BookCategory/BookCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <div className="max-w-7xl mx-auto">
                <Accordian></Accordian>
            </div>
        </div>
    );
};

export default Home;