import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Newleter from "../../components/Newleter/Newleter";
import ReleseBooks from "../../components/ReleseBooks/ReleseBooks";
import Testomonial from "../../components/Testomonial/Testomonial";
import Article from './../../components/Article/Article';
import Faq from './../../components/Faq/Faq';
import HeroSections from './../../components/HeroSections/HeroSections';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className=" min-h-screen">
                <Banner></Banner>
                <Cards></Cards>
                <Testomonial></Testomonial>
                <ReleseBooks></ReleseBooks>
                <Features></Features>
                <Newleter></Newleter>
                <HeroSections></HeroSections>
                <Faq></Faq>
                <Article></Article>
            </div>
            <Footer></Footer>
        </div>


    );
};

export default Home;