import React from 'react';
import s from './Detalle.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useStripe } from '@stripe/react-stripe-js';

export default function Detalle({id}) {

    return (
        <h1>{`DETALLE DEL CURSO ${id}`}</h1>
    )
}