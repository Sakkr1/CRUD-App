import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Components/Nav';
import Table from './Components/Table';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductView from './Components/ProductView';
import AddProduct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';
import Categories from './Components/Categories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Table />}/>
      <Route path='/categories' element={<Categories />}/>
      <Route path='/products/:id' element={<ProductView />}/>
      <Route path='/products/add' element={<AddProduct />}/>
      <Route path='/products/edit/:id' element={<EditProduct />}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

