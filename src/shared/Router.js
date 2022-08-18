import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import CreatePage from '../pages/CreatePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ScrollToTop from './ScrollToTop';
import { getCookie } from './Cookie';
import { useDispatch, useSelector } from 'react-redux';
import { __getUser } from '../redux/modules/userSlice';

const Router = () => {
  // const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state.users.user.result.data);
  // console.log('userInfo!!!!', userInfo);
  const token = getCookie('ACCESS_TOKEN');
  console.log('token!!', token);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<MainPage key={document.location.href} />} />
          <Route
            path='/detail/:id'
            element={<DetailPage key={document.location.href} />}
          />
          <Route
            path='/create'
            element={token === undefined ? <Navigate to='/' /> : <CreatePage />}
          />
          <Route
            path='/login'
            element={token === undefined ? <LoginPage /> : <Navigate to='/' />}
          />
          <Route
            path='/signup'
            element={token === undefined ? <SignupPage /> : <Navigate to='/' />}
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
