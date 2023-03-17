import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer'
import Whats from '../componentes/Whatsapp/Whats'
/* import Reservaitem from '../componentes/Modal/BSmodal'; */
import Carrossel from '../paginas/carrossel'
import './style.css'
function Home() {
  return (
<div>
      <Cabecalho/>
      <Row sm={5}>
      </Row>
      
      <Carrossel/>
      <Whats/>
      <br></br>
      <br></br>
      <br></br>
      
      <Footer/>
    </div>
      )
      };

export default Home;

