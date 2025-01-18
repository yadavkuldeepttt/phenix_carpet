import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client';



const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<App />
</BrowserRouter>
);
