import React, { useState , useContext} from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({producto})=> {
   const[cantidadAñadida, setCantidadAgregada ] =useState ("")
   const {addItem}= useContext (CartContext)
  
    const onAdd =(cantidad) => {
        console.log (`Compraste ${cantidad} productos`)
        setCantidadAgregada (cantidad)
        addItem(producto, cantidad)
    }
      
    return (

     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text> ${producto.precio}</Card.Text>
        {cantidadAñadida === '' ? <ItemCount stock={producto.stock} onAdd={onAdd}/>
         : <Link to='/cart' className="btn btn-dark">Ir al Carrito</Link>}
      </Card.Body>
     </Card>
        
    )
}

export default ItemDetail