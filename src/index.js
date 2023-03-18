import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from 'components/Navigation/Navigation';
import UserRoutes from 'components/UserRoutes/UserRoutes';

import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
