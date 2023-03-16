import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
function Cabecalho() {
  
  return (
    <div class="container-fluid" id="cabecalho">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">RESERVAS</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/" id="home-link">HOME <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="contato-link">CONTATO</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="intranet-btn">ALUGUEL</button>
      </form>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/login" id="login-link">LOGIN</a>
        </li>
      </ul>
    </div>
  </nav>
</div>



  )}

  export default Cabecalho

