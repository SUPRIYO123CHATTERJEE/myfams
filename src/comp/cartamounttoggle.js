import { Link } from "react-router-dom";

const CartAmountToggle = ({Amount, Setdecrease,Setincrease}) => {
  return (<>
    <div className="d-flex mb-3">
        <button onClick={()=>{Setdecrease()}}><i class="fa fa-minus" aria-hidden="true"></i></button>
        <div style={{margin:"0 0.5em"}}> {Amount}</div>
        <button onClick={()=>{Setincrease()}}><i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
    
    </>
  )
}

export default CartAmountToggle;