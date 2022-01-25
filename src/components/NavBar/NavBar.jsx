import React from "react";
import {Navbar, Nav, Container, Offcanvas}  from 'react-bootstrap';
import CartWidget from "../CartWidget/CartWidget";
import { BrowserRouter, Switch, Route,Link } from 'react-router-dom';


export default  function NavBar (){

    return(
        <>
        <Navbar className="navbar " expand={false}>
          <Container fluid>
            <Navbar.Brand href="#" className="logo"> <Link className="LinkToBrand" to={'/'} >Tienda Mocalú</Link> </Navbar.Brand>

            <Navbar.Toggle className="navbar-toggle" aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-start flex-grow-1 pe-3">
                   
                    <Nav.Link className="nav-link"  > <Link className="LinkTo" to={'/'} >INICIO </Link> </Nav.Link>                          
                    <Nav.Link className="nav-link"  > <Link className="LinkTo" to={'/coleccion1'}> COLECCION 1</Link> </Nav.Link>
                    <Nav.Link className="nav-link"  > <Link className="LinkTo" to={'/coleccion2'} > COLECCION 2</Link> </Nav.Link>
                    <Nav.Link className="nav-link"  > <Link className="LinkTo" to={'/TablaDeTalles'} >TABLA DE TALLES</Link> </Nav.Link>
                    <Nav.Link className="nav-link"  > <Link className="LinkTo" to={'/infoEnvios'} >INFORMACION DE ENVIOS</Link> </Nav.Link>
                    
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>

              <CartWidget />

          </Container>
        </Navbar>
        </>
    )
}

