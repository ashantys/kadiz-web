'use client';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from "components/Header";
import Navbar from "components/Navbar";
import Nosotros from "components/Nosotros";
import Servicios from "components/Servicios";
import Contacto from "components/Contacto";
import Footer from "components/Footer";


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
