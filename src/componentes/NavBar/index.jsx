import React from "react";
import CartWidgets from "../CartWidgets/index"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  {NavLink} from 'react-router-dom';


const Barra = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand as= {NavLink} to='/'>KiraStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as= {NavLink} to='/'>Home</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item as= {NavLink} to='/categoria/Remeras'>Remeras</NavDropdown.Item>
            <NavDropdown.Item as= {NavLink} to='/categoria/Pantalones'>Pantalones</NavDropdown.Item>
            <NavDropdown.Item as= {NavLink} to='/categoria/Polleras'>Polleras</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as= {NavLink} to='/'>
              Todos los productos
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link"><CartWidgets/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Barra;


