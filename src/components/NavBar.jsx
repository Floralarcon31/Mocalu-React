import React from "react";

export default  function NavBar (){

    return(
        <>
            <nav class="navbar navbar-light  fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand  navbar-center logo" href="#">Tienda Mocalú</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                        <div class="offcanvas-body">
                            
                            <ul class="navbar-nav justify-content-startflex-grow-1 pe-3">
                               
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Coleccion 1</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Coleccion 2</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Tabla de talles</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Info de Envios</a>
                                </li>
                            </ul>
                            <hr />
                            <div class="offcanvas-footer">

                            </div>
                                    <button class="btnSignUp" id="signUp">
                                        Crear cuenta
                                    </button>
                                    <button class="btnLogin"id="Login">
                                        Iniciar sesión
                                    </button>
                        </div>
                        </div>
                        
                </div>
            </nav>
        </>
    )
}