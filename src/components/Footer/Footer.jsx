import React from 'react'
import logo from './img/logo.png'
import  whatsapp from './img/whatsapp.png'
import instagram from './img/instagram_PNG11.png'
import facebook from './img/facebook_logos_PNG19754.png'
import { Link} from 'react-router-dom';

export default function Footer() {

  return (
    <div className="footer">
      <div className="footerLeft">
        <Link to={'/'}>
        <img src={logo} alt="logo Tienda Mocalu" width="70" />
        </Link>
       
        <ul>
          <ul>Copyright 2022 Tienda Mocalú</ul>
          <ul>By FloresInc</ul>
        </ul>
      </div>
      <div className="footerRight">
        <p>¡Encontranos en nuestras redes!</p>
        <ul className="footerLinks">
          <li>
   
          <img src={whatsapp} alt="logo whatsapp" className='redesSociales' /> </li>
          <li>
          <img src={instagram} alt="logo instagram" className='redesSociales' /> </li>
          <li >
          <img  src={facebook} alt="logo facebook" className='redesSociales1'/> </li>
        </ul>
      </div>
    </div>
  );
}