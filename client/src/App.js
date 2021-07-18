import React from 'react';
import PagoExitoso from './components/pagoexitoso/PagoExitoso';
import Cesta from './components/cesta/Cesta';
import DetalleProducto from './components/detalleproducto/DetalleProducto';
import Clases from './components/clases/Clases';
import CondicionesUso from './components/condicionesuso/CondicionesUso';
import {Route } from 'react-router-dom';
import s from './App.module.css';

const moneda = 'USD';
const cliente = 'edwardburgos@gmail.com';
const clasesPorComprar = [
  {
    id: 8,
    imagen: 'https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    nombre: '4 horas de clase de matemáticas',
    precioDescuento: 14.30,
    precioOriginal: 16.99,
    dia: '16/07/2021', 
    horaInicio: '9:30 AM', 
    horaFin: '10:00 PM',
    profesor: 'braiansilva@gmail.com'
  },
  {
    id: 56,
    imagen: 'https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    nombre: '4 horas de clase de comunicación',
    precioDescuento: 14.30,
    precioOriginal: 16.99,
    dia: '17/07/2021', 
    horaInicio: '10:30 AM', 
    horaFin: '2:00 PM',
    profesor: 'braiansilva@gmail.com'
  },
  {
    id: 63,
    imagen: 'https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    nombre: '4 horas de clase de inglés',
    precioDescuento: 14.30,
    precioOriginal: 16.99,
    dia: '18/07/2021', 
    horaInicio: '3:30 PM', 
    horaFin: '9:00 PM',
    profesor: 'braiansilva@gmail.com'
  },
  {
    id: 71,
    imagen: 'https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    nombre: '4 horas de clase de ciencia',
    precioDescuento: 14.30,
    precioOriginal: 16.99,
    dia: '19/07/2021', 
    horaInicio: '5:30 PM', 
    horaFin: '6:00 PM',
    profesor: 'braiansilva@gmail.com'
  },
  {
    id: 75,
    imagen: 'https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    nombre: '4 horas de clase de ciencia',
    precioDescuento: 14.30,
    precioOriginal: 16.99,
    dia: '20/07/2021', 
    horaInicio: '5:30 PM', 
    horaFin: '6:00 PM',
    profesor: 'braiansilva@gmail.com'
  },
  {
    id: 698,
    imagen: 'https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    nombre: '4 horas de clase de ciencia',
    precioDescuento: 14.30,
    precioOriginal: 16.99,
    dia: '21/07/2021', 
    horaInicio: '5:30 PM', 
    horaFin: '6:00 PM',
    profesor: 'braiansilva@gmail.com'
  }
]

function App() {
  return (
    <div className={s.container}>
      <Route path='/cesta' render={({ match }) => <Cesta clasesPorComprar={clasesPorComprar} moneda={moneda} cliente={cliente}/>}></Route>
      <Route path="/pagoexitoso" component={PagoExitoso}></Route>
      <Route path="/detalle/:id" render={({ match }) => <DetalleProducto id={match.params.id} />} />
      <Route path="/condicionesdeuso" component={CondicionesUso}></Route>
      <Route path="/clases" component={Clases}></Route>
    </div>
  );
}

export default App;
