import React, { useState, useEffect } from 'react';
import { agregarCajas } from './actions/cajas';
import Caja from './Components/Caja';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BackgroundApp = () => {
  const [cajas, setCajas] = useState([]);

  const handlerNewCajas = () => {
    setCajas(agregarCajas(100));
  };

  useEffect(() => {
    setCajas(agregarCajas(100));
  }, []);

  return (
    <div className="container">
      <div className="container-head">
        <div className="logo">
          <img src="assets/logo.png" alt="logo" />
          <h1>ColorWill</h1>
        </div>
        <div className="buscador" onClick={handlerNewCajas}>
          Generar
        </div>
      </div>
      <ToastContainer autoClose={1000} hideProgressBar={true} />
      <div className="container-caja animate__animated animate__fadeIn animate__faster">
        {cajas.map(({ numero, color }) => (
          <Caja key={numero} color={color} />
        ))}
      </div>
    </div>
  );
};

export default BackgroundApp;
