import { Outlet } from "react-router-dom";
import "./App.css";
// import { CartProvider } from "./comp/cartcontext";
import { AppProvider } from "./context";
import { CartProvider } from "./comp/cartcontext";


export default function App() {
  return (
    <>
    <CartProvider>
      <AppProvider>
        
          <Outlet />
        
      </AppProvider>
      </CartProvider>
    </>
  )
}