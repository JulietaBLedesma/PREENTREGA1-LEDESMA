import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidgets = () => {
    const {cartQuantity} = useContext (CartContext)

 return (
    <>
    <i class="bi bi-cart4" color="black"></i>
    {cartQuantity () > 0 && <span className="numCarrito">{cartQuantity()}</span>}
    </>
 )


}
export default CartWidgets