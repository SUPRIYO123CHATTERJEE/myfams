

const Cartreducer = (state, action) => {
  if(action.type === "ADDTOCART"){
    let {id,color,Amount,product} = action.payload;
    const cartProduct= {
      id: id + color,
      color,
      Amount,
      img: product.image[0].url,
      price: product.price,
      max : product.stock

    }
    // console.log(product);
    return{
      cart:[...state.cart , cartProduct]
    }
  };
  if(action.type  === "REMOVEITEM"){
    let updateCart = state.cart.filter(
      (e)=> e.id!== action.payload
    );
    return{
      ...state,
      cart:updateCart,
    }
  }
  return state;
}

export default Cartreducer;