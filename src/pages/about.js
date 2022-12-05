import "../about.css";
import About_footer from "../comp/about-footer";
import Arrival from "../comp/arrival";
import Copy from "../comp/copy";
import Header from "../comp/header";
import PageHeading from "../comp/pageheading";
import WhyShop from "../comp/whyshop";

export default function About() {
    return (
        <>
        <Header/>
            <PageHeading heading="About Us"/>
            <WhyShop/>
            <Arrival/>
            <About_footer/>
            <Copy color="#002c3e"/>
        </>
    )
}