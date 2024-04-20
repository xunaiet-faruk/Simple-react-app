
import App from "./App";
import Ayurvedic from "./Ayurvedic";
import Banner from "./Banner";
import Book from './Book'
import Consultations from "./Consultations";
import Footer from "./Footer";
import Magic from "./Magic";
import Meet from "./Meet";
import Review from "./Review";

const Home = () => {
    return (
        <div>
            <div className="bg-[#FFF7E2] w-full h-[70px]">
         </div>
         <div>
            <Banner/>
            <Magic/>
            <Consultations/>
            <Book/>
            <Ayurvedic/>
            <Review/>
            <Meet/>
            <App/>
            <Footer/>
         </div>
        </div>
    );
};

export default Home;