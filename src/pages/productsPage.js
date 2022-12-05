import Header from "../comp/header";
import PageHeading from "../comp/pageheading";
import Product from "../comp/prod";
import { useProductContext } from "../context";

export default function Products_page(){
    const { isLoading, products } = useProductContext();

    if (isLoading) {
        return <div> ......Loading </div>;
      }
    return(
        <>
        <Header/>
        <PageHeading heading= "Our Products"/>
        <div className="container">
        <div className="container mt-5 mb-3">
        <figure className="text-center">
  <blockquote className="blockquote">
    <h2>Our products</h2>
  </blockquote>
</figure>
        </div>
        <div className="row">
        {products.map((curElem) => {
            return <Product key={curElem.id} {...curElem}/>;
          })}
          </div>
          </div>
    </>
    )
}