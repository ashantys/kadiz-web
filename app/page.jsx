'use client';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from "../pages/Header";
import Navbar from "../pages/Navbar";
import Nosotros from "../pages/Nosotros";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";
import Footer from "../pages/Footer";


export default function Home() {
  return (
      <>
        <Navbar/>
          <Header/>
          <Nosotros/>
          <Servicios/>
          <Contacto/>
        <Footer/>
      </>
  )
}
