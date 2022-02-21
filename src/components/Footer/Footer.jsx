import React from 'react'
import logo from './img/logo.png'
import  whatsapp from './img/whatsapp.png'
import instagram from './img/instagram_PNG11.png'
import facebook from './img/facebook_logos_PNG19754.png'
import { Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <Link to={'/'}>
        <img src={logo} alt="logo Tienda Mocalu" width="70" />
        </Link>
       
        <ul>
          <ul>Copyright 2022 Tienda Mocalú</ul>
          <ul>By FloresInc</ul>
        </ul>
      </div>
      <div className="footer-rigth">
        <p>¡Encontranos en nuestras redes!</p>
        <ul className="footer-links">
          <li>
   
          <img src={whatsapp} alt="logo Tienda Mocalu" className='redesSociales' /> </li>
          <li>
          <img src={instagram} alt="logo Tienda Mocalu" className='redesSociales' /> </li>
          <li >
          <img  src={facebook} alt="logo Tienda Mocalu" className='redesSociales1'/> </li>
        </ul>
      </div>
    </div>
  );
}