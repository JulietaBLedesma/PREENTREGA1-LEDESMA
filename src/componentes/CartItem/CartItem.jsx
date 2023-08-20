import React , {useContext} from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item}) => {
    const {deleteItem} = useContext (CartContext)
    return (
        <div className="d-flex justify-content-around align-items-center">
                <img src = {item.img} alt= {item.nombre} width={'150 rem'} />
                <p>{item.nombre}</p>
                <p>{item.precio}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: ${item.quantity* item.precio}</p>
                <button className="btn btn-danger" onClick={()=>deleteItem(item.id)}>X</button>

        </div>
    )
}

export default CartItem