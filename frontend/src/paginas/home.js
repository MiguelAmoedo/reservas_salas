import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer'
import Whats from '../componentes/Whatsapp/Whats'
import Reserva from '../componentes/Reserva/Reserva'
import Carrossel from '../paginas/carrossel'
import './style.css'
function Home() {
  return (
    
    

<div>
      <Cabecalho/>
      <Row sm={10}>
        <br></br>
        <br></br>
        
        

        
      </Row>
      <Carrossel/>
      <br></br>

      <Reserva/>
      <Whats/>
      <br></br>
       
        
      
      <Footer/>

    </div>

    

      )
      };

export default Home;

