import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';
import { LoginPage } from './components/pages/LoginPage';
import { Menupage } from './components/pages/Menupage';
import { Homepage } from './components/pages/Homepage'
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./components/Layout/Layout"
import { OrderPage } from './components/pages/OrderPage'
import { PrivateRoute } from './routes/PrivateRoute'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={ <Layout />} path="/">
            <Route element={<LoginPage/>} path="authorisation" />
            <Route element={<Homepage/>} index />
            <Route element={<Menupage/>} path="menu" />
            <Route element="Order page" path="order" />
            <Route path="cart" element={
              <PrivateRoute>
                <OrderPage />
              </PrivateRoute>
            }>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
