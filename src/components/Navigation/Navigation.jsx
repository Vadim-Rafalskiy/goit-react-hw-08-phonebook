import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <>
      <div className={styles.navWrapper}>
        <h1 className={styles.title}>
          Phone<span className={styles.accent}>Book</span>
        </h1>

        <div className={styles.nav}>
          <NavLink className={styles.link} to={'/login'}>
            Login
          </NavLink>
          <span className={styles.menuSeparator}>|</span>
          <NavLink className={styles.link} to={'/register'}>
            Register
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;
