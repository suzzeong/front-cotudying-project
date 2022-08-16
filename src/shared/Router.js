import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import CreatePage from '../pages/CreatePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import { getCookie } from './Cookie';

const Router = () => {
  const token = getCookie('ACCESS_TOKEN');
  console.log('todken!!!!', token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage key={document.location.href} />} />
        <Route
          path='/detail/:id'
          element={<DetailPage key={document.location.href} />}
        />
        <Route
          path='/create'
          element={
            token ? <CreatePage key={document.location.href} /> : <LoginPage />
          }
        />
        <Route
          path='/login'
          element={token ? <Navigate to='/' /> : <LoginPage />}
        />
        <Route
          path='/signup'
          element={<SignupPage key={document.location.href} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
