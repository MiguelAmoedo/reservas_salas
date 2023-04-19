import React from 'react';
import { Container, Row, Nav, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cabecalho from '../componentes/cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer';
import Func from '../imgs/funcii.png';
import Client from '../imgs/cliente3.png';
import Sla from '../imgs/salas.png';
import Hosmi from '../imgs/usuario.png';
import './style.css'
 


function Index() {

    return (
      
    <Container className='indexc'> 
     <Cabecalho/>
    <h1 className='intranetb'>INTRANET</h1>
    <br></br>
        <div className='logob1'>
        <Link className='clientelogo' to="/clientes"> <img src={Client} className='logob'></img></Link>
        <h4 className='text-logoa'>CLIENTES</h4>
       </div>
       <div className='logob1'>
       <Link className='clientelogo' to="/funcionarios"> <img  src={Func} className='logob' ></img></Link>
       <h4 className='text-logob'>FUNCIONÁRIOS</h4>
       </div>
       <div className='logob1'>
       <Link className='clientelogo' to="/usuario"><img src={Hosmi} className='logob' ></img></Link>
       <h4 className='text-logoc'>USUÁRIOS</h4>
       </div>
       <div className='logob1'> 
       <Link className='clientelogo'to="/sala"> <img src={Sla} className='logob'></img> </Link>
       <h4 className='text-logod'>SALAS</h4>
       </div>
       <Footer/>
    </Container>


 
    )

}
export default Index;
  