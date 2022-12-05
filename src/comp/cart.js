import { useCartContext } from "./cartcontext";
import CartItem from "../comp/cartItem";
import Header from "./header";
export default function Cart() {
    const { cart } = useCartContext();

    return (
        <>
            <Header />
            <div className="container" style={{ color: "red" }}>
                <div className="row " style={{justifyContent: "space-evenly"}}>
                <div className="col-2">
                    <p><strong>Product</strong></p>
                </div>
                <div className="col-2">
                    <p><strong>Price</strong></p>
                </div>
                <div className="col-2">
                    <p><strong>Quantity</strong></p>
                </div>
                <div className="col-2 d-sm-none d-none d-md-block">
                    <p><strong>total_price</strong></p>
                </div>
                <div className="col-2">
                    <p><strong>Remove</strong></p>
                </div>
                
            
            <hr />

            {cart.map((e) => {
                return (
                    <>
                    <div className="container text-dark">
                    <div className="row" style={{justifyContent: "space-evenly"}}>
                        {/* // <div className="row"> */}
                        
                        <CartItem key={e.id} {...e} />
                
                        </div>
                        <hr />
                    </div>
                    </>
                )

            })}
            <div style={{ textAlign: "center" }}>
                <button className="btn btn-danger">Proceed to Pay</button>
            </div>
            </div>
            </div>
        </>
    )
}