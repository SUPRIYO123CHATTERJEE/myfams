import React from 'react';
import CartAmountToggle from './cartamounttoggle';
import { useCartContext } from './cartcontext';

const CartItem = (e) => {
  const { RemoveItem } = useCartContext();
  return (
    <>
    <div className='col-2'><img src={e.img} style={{ width: "80%" }}></img></div>
    <div className='col-2'><p><strong>{e.price}</strong></p></div>
    <div className='col-2'><p>{e.Amount}</p></div>
    <div className='col-2 d-sm-none d-lg-block' ><p>{e.Amount * e.price}</p></div>
    <div className='col-2'><button className='btn text-danger'><i className="fa fa-trash-o" aria-hidden="true" onClick={() => RemoveItem(e.id)}></i></button></div>
    
    </>
  )
}

export default CartItem;