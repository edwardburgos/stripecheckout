import CartItem from '../cartitem/CartItem';
import React from 'react';
import { useSelector } from 'react-redux';

export default function CartItems() {
  const clasesPorComprar = useSelector(state => state.clasesPorComprar);
  const moneda = useSelector(state => state.moneda);

  return (
    <div>
      {
        clasesPorComprar.map((e, i) => <CartItem key={i} id={e.id} imagen={e.imagen} nombre={e.nombre} precioDescuento={e.precioDescuento} precioOriginal={e.precioOriginal} moneda={moneda}></CartItem>)
      }
    </div>
  );
}