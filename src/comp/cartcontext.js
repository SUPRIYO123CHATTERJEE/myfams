import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../comp/cartreducer";


const CartContext = createContext();
const getLocalData =()=>{
    let newData = localStorage.getItem("supLocal");

    if(newData!=null){
    
        return JSON.parse(newData);
    
}
else{
    return [];
}
}

const initialstate = {
    // cart:[],
    cart: getLocalData(),
    total_item: "",
    total_price:"",
}

const CartProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer , initialstate);

    const addToCart = (id , color, Amount, product)=>{
        // console.log(Amount);
    dispatch({ type: "ADDTOCART", payload: {id,color,Amount,product}})

};
const RemoveItem = (id)=>{
    dispatch({type: "REMOVEITEM" , payload: id})
}
useEffect(()=>{
    localStorage.setItem("supLocal", JSON.stringify(state.cart))
},[state.cart])

  return (
    <CartContext.Provider value={{...state, addToCart, RemoveItem}}>
        {children}
    </CartContext.Provider>
  )
}
const useCartContext =()=>{
    return useContext(CartContext);
}

export {CartProvider, useCartContext};