import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AuthLayout from './AuthLayout/AuthLayout';
import NavBar from 'components/NavBar/NavBar';
import UserRoutes from 'components/UserRoutes/UserRoutes';

import { store, persistor } from '../redux/store';

// import styles from './App.module.scss';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <BrowserRouter basename="goit-react-hw-08-phonebook"> */}
        <AuthLayout>
          <BrowserRouter>
            <NavBar />
            <UserRoutes />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};

export default App;
