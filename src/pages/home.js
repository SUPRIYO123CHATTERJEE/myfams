import "../App.css";
import Arrival from "../comp/arrival";
import Carousel_1 from "../comp/carousel-1";
import Copy from "../comp/copy";
import Customer from "../comp/cuatomer-t";
import Footer from "../comp/footer";
import Header from "../comp/header";
import Subscribe from "../comp/subscribe";
import WhyShop from "../comp/whyshop";
import FeatureProducts from "../featureProducts";
export default function Home(){
    return(
        <>
            <Header/>
            {/* 1st carousel banner */}
        

    <Carousel_1/>
    <FeatureProducts/>
        {/* why shop with us */}

    <WhyShop/>

        {/* new arrival banner */}

    <Arrival/>
    {/* products */}
        {/* <Products/> */}

        {/* subscribe */}

    <Subscribe/>

    {/* customers testimonials */}
    <Customer/>
    {/* footer */}
    <Footer/>
    {/* copy */}
    <Copy/>
        </>
    )
}