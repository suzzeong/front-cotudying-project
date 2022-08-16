import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import { store } from './redux/config/configStore';
import { Provider } from 'react-redux';
import axios from 'axios';
axios.defaults.withCredentials = true;
=======
import { store } from "./redux/config/configStore"
import { Provider } from 'react-redux';
>>>>>>> 974569b5d8501bcc7ea486851cdae7e0d9d09b13

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
