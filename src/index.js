import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Header from "./Componentes/Header";
import RoutesPages from "./Componentes/routes/RoutesPages"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RoutesPages />
  </React.StrictMode>
);