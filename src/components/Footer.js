import React from 'react';
import "../assets/styles/components/Footer.scss";
import footerBackground from "../assets/images/Footer/footer-bg.jpg";

const Footer = () => (
    <footer>
       <img src={footerBackground} className='img-footer'/>
    </footer>
);

export default Footer;