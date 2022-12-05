import {useState , createContext, useContext} from "react";
import {Link} from "react-router-dom";
// const Usercontext = createContext();


export default function Product(curElem){

  const {id , name , image , price , category} = curElem;
  // console.log(name);

    return(
        <><div className="col-md-4" style={{margin:"2em 0"}}>
        <Link to={`/singleProduct/${id}`} style={{textDecoration: "none", color: "black"}}>
        <div className="card">
  <img src={image} className="card-img-top" alt={name}/>
  <h5 className="card-title" style={{fontSize: "2em",fontWeight: "bold", textAlign:"center"}}>{name}</h5>
  <div className="card-body d-flex justify-content-between">
  
  <h6 style={{fontWeight:"700"}}>{price}</h6>
  <h6>{category}</h6>
  </div>
</div>
        </Link>
        </div>
        </>
    )}