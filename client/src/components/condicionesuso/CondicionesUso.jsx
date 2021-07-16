import React from 'react';
import { useEffect } from 'react';

export default function CondicionesUso() {

    useEffect(() => {
        document.title = "Condiciones de uso"
    }, []);

    return (
        <h1>CONDICIONES DE USO</h1>
    )
}