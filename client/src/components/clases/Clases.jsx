import React from 'react';
import { useEffect } from 'react';

export default function Clases() {

    useEffect(() => {
        document.title = "Clases"
    }, []);

    return (
        <h1>CLASES</h1>
    )
}