import React from 'react';
import { useEffect } from 'react';

export default function DetalleProducto({id}) {
    
    useEffect(() => {
        document.title = `Detalle de producto ${id}`
    })

    return (
        <h1>{`DETALLE DEL PRODUCTO ${id}`}</h1>
    )
}