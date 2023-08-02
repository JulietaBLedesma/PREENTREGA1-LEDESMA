import React from "react";
import { Card, Button } from "react-bootstrap";

const Item =({prod}) => {
    return (
   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.nombre}</Card.Title>
        <Card.Text>{prod.descripcion}</Card.Text>
        <Card.Text> ${prod.precio}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>
    
    )
}

export default Item