import s from './CartItem.module.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import { closeCircleOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { modificarClasesPorComprar } from '../../actions';

export default function CardItem({ id, imagen, nombre, precioDescuento, precioOriginal, moneda }) {

  const dispatch = useDispatch();
  const clasesPorComprar = useSelector(state => state.clasesPorComprar);

  function quitardeCesta() {
    let clasesActualizadas = clasesPorComprar.filter(e => e.id !== id)
    console.log(clasesActualizadas)
    dispatch(modificarClasesPorComprar(clasesActualizadas));
  }


  return (
    <>
      <div className={s.card}>
        <Link to={`/detalle/${id}`} className={s.enlace}>
        <img src={imagen} alt={nombre} className={s.cover} />
        <p className={s.title}>{nombre}</p>
        <div className={s.prices}>
          <div>
            <span className={s.moneda}>{moneda}</span>
            <span className={s.precio}>{precioDescuento.toFixed(2)}</span>
          </div>
          <div>
            <span className={s.moneda}>{moneda}</span>
            <span className={s.precioOriginal}>{precioOriginal.toFixed(2)}</span>
          </div>
        </div>
        </Link>
          <div className={s.quitarDeCesta} onClick={quitardeCesta}>
            <IonIcon icon={closeCircleOutline} className={s.iconDumb}></IonIcon>
            <span className={s.textDumb}>Quitar</span>
          </div>
      </div>
    </>
  );
}

