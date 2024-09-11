import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
const Holamundo = ({nombre}) => {
 // Definir el estado con useState
 const [msj, setMsj] = useState(''); // Estado inicial vacío

 // Función para actualizar el estado al hacer clic en el botón
 const mostrarMensaje = () => {
   setMsj('(desde cambio de estado)');
 };

    return (
        <section className='container my-4'>
            <h1 className='text-center'> Hola {nombre} {msj}</h1>
            <Button className='btn btn-primary mt-3' onClick={mostrarMensaje}> Mensaje </Button>
        </section>
    );
};

export default Holamundo;