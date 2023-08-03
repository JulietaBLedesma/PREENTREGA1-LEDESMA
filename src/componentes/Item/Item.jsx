import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item =({prod}) => {
    return (
   
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.nombre}</Card.Title>
        <Card.Text>{prod.descripcion}</Card.Text>
        <Card.Text> ${prod.precio}</Card.Text>
        <Button as={Link}  to={`/item/${prod.id}`}variant="primary">Ver más</Button>
      </Card.Body>
     </Card>
    
    )
}

export default Item