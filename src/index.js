import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Header from "./Componentes/Header";
import RouteHandle from "./routes/RouteHandle"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouteHandle />
  </React.StrictMode>
);