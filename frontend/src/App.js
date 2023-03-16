import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Clientes from './paginas/clientes';
import Funcionarios from './paginas/funcionarios';
import Home from './paginas/home';
import Salas from './paginas/salas';
import Login from './paginas/login';

function App() {
  return (
    


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/funcionarios" element={<Funcionarios/>} />
          <Route path="/salas" element={<Salas/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>    



  );
}

export default App;
