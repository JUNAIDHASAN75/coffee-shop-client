import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Popular from "../Popular/Popular";
import Section from "../Section/Section";
import SocialStatus from "../SocialStatus/SocialStatus";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Section></Section>
            <Popular></Popular>
            <SocialStatus></SocialStatus>
            <Footer></Footer>
        </div>
    );
};

export default Home;