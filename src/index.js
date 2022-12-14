import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Header from "./components/Header";
import RouteHandle from "./routes/RouteHandle"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouteHandle />
  </React.StrictMode>
);