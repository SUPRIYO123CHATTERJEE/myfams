import { useParams} from "react-router-dom";
import {useEffect} from "react";
import { useProductContext } from "../context";
import Image from "../comp/image";
import Header from "../comp/header";
import AddToCart from "../pages/addtocart";
import "../pages/single.css";


const API = "https://api.pujakaitem.com/api/products";


const Single_product = () => {

  const  {getSingleProduct, isSingleLoading, singleProduct}= useProductContext();
//   console.log(singleProduct);
  const {id} = useParams();
const {id:sup ,name,image, company,description , stock,price,stars,reviews } = singleProduct;
//   console.log(singleProduct);

useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`);

},[])

if (isSingleLoading){
    <h1>.....loading.....</h1>
}
    return (
    <>
    <Header/>
        <div className="container">
            <div className="row singlerow">
                <div className="col-6 istcol">
                    <div className="row">
                        <div className="col">
                        <Image imgs={image}/>
                        </div>
                    
                    </div>
                </div>
                <div className="col-6 desc">
                    <h4 style={{color: "red",fontSize:"2.5em"}}>{name}</h4>
                    <h4 style={{color: "red"}}>Description</h4>
                    <p>{description}</p>
                    <p><strong style={{color: "red"}}>MRP :</strong> {price}</p>
                    <p><strong style={{color: "red"}}>Company : </strong> {company}</p>
                    <p><strong style={{color: "red"}}>Stock : </strong>{stock}</p>
                    <p><strong style={{color: "red"}}>Stars : </strong>{stars}</p>
                    <p><strong style={{color: "red"}}>Reviews : </strong>{reviews}</p>
                    <hr/>
                    <AddToCart product = {singleProduct}></AddToCart>
                </div>
            </div>
        </div>
    </>
  )
}

export default Single_product;