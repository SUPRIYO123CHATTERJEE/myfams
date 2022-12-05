import About_footer from "../comp/about-footer";
import Copy from "../comp/copy";
import Header from "../comp/header";
import PageHeading from "../comp/pageheading";
import WhyShop from "../comp/whyshop";

export default function Blog_page(){
    return(
        <>
        <Header/>
        <PageHeading heading="Our Blogs"/>
        <WhyShop/>
        <About_footer/>
        <Copy color="#002c3e"/>
        </>
    )
}