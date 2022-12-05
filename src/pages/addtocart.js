import { useState} from "react";
import { Link } from "react-router-dom";
import CartAmountToggle from "../comp/cartamounttoggle";
import { useCartContext } from "../comp/cartcontext";

const AddToCart = ({product}) => {
  const { addToCart } = useCartContext();
  const {id, colors=[], stock} = product;

  const [color, setColor] = useState(colors[0]);
  const [Amount , setAmount]= useState(1);

const Setincrease =()=>{
  Amount < stock? setAmount(Amount + 1) : setAmount(stock);
}
const Setdecrease =()=>{
  Amount>1? setAmount(Amount-1): setAmount(1);
}
  
  // console.log(colors);
  return (<>
    <div>
        <p>
          Colors : 
         {colors.map((curColor, index) =>{
          return <button key={index} style={{backgroundColor:curColor,margin:"0 0.5em", borderRadius:"50%"}} className={color === curColor ? "btn active" : "btn" }  onClick={()=>setColor(curColor)}>
            {/* {curColor} */}
            </button>
        })}
      </p>
    </div>
<CartAmountToggle Amount={Amount} Setdecrease={Setdecrease} Setincrease={Setincrease}/>
<Link to="/cart" onClick={()=> addToCart(id , color,Amount,product) }>

        <button className="btn btn-primary">AddtoCart</button>
    </Link>
    </>
  )
}


export default AddToCart;