import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './App'; */
import reportWebVitals from './reportWebVitals';

import Control from './Componentes/Control';
/* import Calculadora from './Componentes/Calculadora';
import Calorias from './Componentes/Calorias'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Control />
    {/* <Calculadora />
    <Calorias /> */}
  </React.StrictMode>
);

reportWebVitals();
