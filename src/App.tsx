import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';
import { LoginPage } from './components/pages/LoginPage';
import { Menupage } from './components/pages/Menupage';
import { Homepage } from './components/pages/Homepage';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { OrderPage } from './components/pages/OrderPage';
import { PrivateRoute } from './routes/PrivateRoute';
import { OrderSection } from './components/OrderSection';
import { ThemeProvider } from './Context/ThemeProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

function App() {
  return (
    <>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />} path="/">
              <Route element={<LoginPage />} path="authorisation" />
              <Route element={<Homepage />} index />
              <Route element={<Menupage />} path="menu" />
              <Route
                path="OrderPage"
                element={
                  <PrivateRoute>
                    <OrderPage />
                  </PrivateRoute>
                }
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
