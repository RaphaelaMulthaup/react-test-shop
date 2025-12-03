import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from './components/product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Product/>);