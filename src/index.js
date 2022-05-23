import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './App'; */
import reportWebVitals from './reportWebVitals';

import Control from './Componentes/Control';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Control />
  </React.StrictMode>
);

reportWebVitals();
