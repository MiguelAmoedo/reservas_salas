import React from 'react';
import {
  Button,
  Container
} from 'react-bootstrap';
import './style.css'

function Reserva() {
  return (
    <form class="form-inline my-5 my-lg-2">
     <a class="btn btn-sm btn-outline-secondary" type="button" id='botao' href="/salas">TODAS AS SALAS</a>
  </form>
  );


}

export default Reserva;