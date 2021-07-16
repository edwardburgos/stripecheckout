import React from 'react';
import PagoExitoso from './components/pagoexitoso/PagoExitoso';
import Cesta from './components/cesta/Cesta';
import Detalle from './components/detalle/Detalle';
import CondicionesUso from './components/condicionesuso/CondicionesUso';
import {Route } from 'react-router-dom';
import s from './App.module.css';

const moneda = 'USD';
const clasesPorComprar = [
  {
    id: 8,
    imagen: 'https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    nombre: '4 horas de clase de matemáticas',
    precioDescuento: 14.30,
    precioOriginal: 16.99
  },
  {
    id: 56,
    imagen: 'https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    nombre: '4 horas de clase de comunicación',
    precioDescuento: 14.30,
    precioOriginal: 16.99
  },
  {
    id: 63,
    imagen: 'https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    nombre: '4 horas de clase de inglés',
    precioDescuento: 14.30,
    precioOriginal: 16.99
  },
  {
    id: 71,
    imagen: 'https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    nombre: '4 horas de clase de ciencia',
    precioDescuento: 14.30,
    precioOriginal: 16.99
  }
]

function App() {
  return (
    <div className={s.container}>
      <Route path='/cesta' render={({ match }) => <Cesta clasesPorComprar={clasesPorComprar} moneda={moneda}/>}></Route>
      <Route path="/pagoexitoso" component={PagoExitoso}></Route>
      <Route path="/detalle/:id" render={({ match }) => <Detalle id={match.params.id} />} />
      <Route path="/condicionesdeuso" component={CondicionesUso}></Route>
    </div>
  );
}

export default App;
