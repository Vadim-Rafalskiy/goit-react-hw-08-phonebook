import { Outlet, Link } from 'react-router-dom';

// import Navigation from '../../Navigation/Navigation';
import App from '../../App';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* <Navigation /> */}

      {/* App має зявлятись після логіну */}
      <App />
      <Link to={'contacts'}>Show contacts</Link>
      <Outlet />
    </div>
  );
};

export default HomePage;
