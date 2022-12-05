import Product from "./comp/prod";
import { useProductContext } from "./context";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    
      <div className="container">
        <div className="container mt-5 mb-3">
        <figure className="text-center">
  <blockquote className="blockquote">
    <h2>Our Feature products</h2>
  </blockquote>
</figure>
        </div>
        <div className="row">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem}/>;
          })}
        </div>
      </div>

  );
};
export default FeatureProduct;