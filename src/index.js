import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import RouteHandle from "./routes/RouteHandle"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteHandle />
  </React.StrictMode>
);