import React from "react";
import {Navbar, Nav, Container, Offcanvas,Row,Button}  from 'react-bootstrap';


export default  function NavBar (){

    return(
        <>
        <Navbar className="navbar " expand={false}>
        <Container fluid>
          <Navbar.Brand href="#" className="logo">Tienda Mocalú</Navbar.Brand>
          <Navbar.Toggle className="navbar-toggle" aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link className="nav-link" href="#">INICIO</Nav.Link>
                <Nav.Link className="nav-link"  href="#">COLECCION 1</Nav.Link>
                <Nav.Link className="nav-link"  href="#">COLECCION 2</Nav.Link>
                <Nav.Link className="nav-link"  href="#">TABLA DE TALLES</Nav.Link>
                <Nav.Link className="nav-link"  href="#">INFO DE ENVIO</Nav.Link>
              </Nav>
    
            </Offcanvas.Body>
        
          </Navbar.Offcanvas>
          
        </Container>
      </Navbar>
        </>
    )
}

