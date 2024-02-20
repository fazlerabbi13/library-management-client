import Accordian from "../Accordian/Accordian";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mt-16 mx-auto">
                <Accordian></Accordian>
            </div>
        </div>
    );
};

export default Home;