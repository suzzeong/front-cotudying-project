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
  const token = useSelector((state) => state.users.user.userToken);
  console.log('token!!!!', token);

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
            element={<CreatePage key={document.location.href} />}
            // element={token !== undefined ? <Navigate to='/' /> : <CreatePage />}
          />
          {/* <Route
            path='/login'
            element={token !== undefined ? <Navigate to='/' /> : <LoginPage />}
          /> */}

          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />

          {/* <Route
            path='/signup'
            element={
              token !== undefined ? (
                <Navigate to='/' />
              ) : (
                <SignupPage key={document.location.href} />
              )
            }
          /> */}
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
