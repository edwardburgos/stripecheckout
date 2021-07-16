
import s from './Cesta.module.css';
import React, { useEffect, useState } from 'react';
import CartItems from '../cartitems/CartItems';
import { Link, useHistory } from 'react-router-dom'; ////useHistory, Redirect
import { useSelector } from 'react-redux';
import { Elements, useStripe, create } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch } from 'react-redux';
import { modificarClasesPorComprar, modificarMoneda } from '../../actions'
import axios from 'axios';
import Detalle from '../detalle/Detalle';
import CestaLlena from '../detallecesta/DetalleCesta';
import DetalleCesta from '../detallecesta/DetalleCesta'

export default function Cesta({ clasesPorComprar, moneda }) {
    const dispatch = useDispatch();
    dispatch(modificarClasesPorComprar(clasesPorComprar));
    if (moneda) dispatch(modificarMoneda(moneda));

    return (
        <>
            <h1 className={s.title}>Cesta</h1>
            <DetalleCesta></DetalleCesta>
        </>
    );
}