'use client';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'react-scroll';
import Image from 'next/image';
import logo from 'public/images/logo-icono.svg';

const footerMenuItems = [
    {
      title: 'Home',
      sectionId: 'header', // Replace with the ID of your header section
    },
    {
      title: 'Nosotros',
      sectionId: 'nosotros', // Replace with the ID of your "Nosotros" section
    },
    {
      title: 'Servicios',
      sectionId: 'servicios', // Replace with the ID of your "Servicios" section
    },
    {
      title: 'Contacto',
      sectionId: 'contacto', // Replace with the ID of your "Contacto" section
    },
  ];

const Footer = () => {
    return (
        <div id="footer" className="background-footer">
            <div className="container-footer">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <Image className="logo-footer" src={logo} alt="logo"/>
                    </div>
                    <div className="col-lg-5">
                        <div className="container-info margin-footer">
                            <h5>Comunicación Directa</h5>
                            <ul class="footer-list">
                                <li >
                                    <i className="bi bi-geo-alt icon"></i>Tlalpan (Alcaldía) Ciudad de México
                                </li>
                                <li>
                                    <i className="bi bi-envelope icon"></i>alalsaar@gmail.com
                                </li>
                                <li>
                                    <i className="bi bi-telephone icon"></i>+52 (551) 265-3166
                                </li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="footer-menu margin-footer">
                            <ul className="footer-list">
                                {footerMenuItems.map((item, index) => (
                                    <li key={index}>
                                    <Link
                                        to={item.sectionId}
                                        spy={true}
                                        smooth={true}
                                        offset={-10}
                                        duration={100}
                                        className="nav-link"
                                    >
                                        {item.title}
                                    </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;
