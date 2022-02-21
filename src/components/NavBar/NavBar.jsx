import react from "react";
import {Navbar, Nav, Container, Offcanvas,NavDropdown}  from 'react-bootstrap';
import CartWidget from "../CartWidget/CartWidget";
import {Link} from 'react-router-dom';
import logo from './logo.png'




export default  function NavBar (){

    return(
        <>
        <Navbar className="navbar " expand={false}>
          <Container fluid>
            <Navbar.Brand  className="logo"> <Link className="LinkToBrand" to={'/'} ><img src={logo} alt="logo Tienda Mocalu" width="60" /> </Link> </Navbar.Brand>

            <Navbar.Toggle className="navbar-toggle" aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-start flex-grow-1 pe-3">
                   
                    <Nav.Link className="nav-link"  > <Link className="LinkTo" to={'/'} >INICIO </Link> </Nav.Link>                          
                    <NavDropdown title="COLECCION VERANO" id="offcanvasNavbarDropdown" >
                          
                          <NavDropdown.Item className="nav-dropdown" > <Link className="LinkTo"  to={'/categoria/vestido'}> VESTIDOS </Link> </NavDropdown.Item>
                          <NavDropdown.Item className="nav-dropdown">  <Link className="LinkTo"  to={'/categoria/camisa'}> CAMISAS </Link></NavDropdown.Item>
                          <NavDropdown.Item className="nav-dropdown">  <Link className="LinkTo"  to={'/categoria/pantalones-shorts'}> PANTALONES Y SHORTS </Link></NavDropdown.Item>
                          <NavDropdown.Item className="nav-dropdown">  <Link className="LinkTo"  to={'/categoria/accesorios'}> ACCESORIOS </Link></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item className="nav-dropdown">
                            <Link className="LinkTo"  to={'/wishlist'}>
                              WISHLIST
                            </Link>
                          </NavDropdown.Item>

                    </NavDropdown>
                    <Nav.Link className="nav-link"  > <Link className="LinkTo" to={'/contacto'}> CONTACTO </Link> </Nav.Link>
                    <Nav.Link className="nav-link"  > <Link className="LinkTo" to={'/cart'}> MI CARRITO </Link> </Nav.Link>
                    
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>

              <CartWidget />

          </Container>
        </Navbar>
 

        </>
    )
}

