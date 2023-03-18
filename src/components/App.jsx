// import { Outlet, Link } from 'react-router-dom';

// import { useSelector } from 'react-redux';

// import { getFilteredContacts } from '../redux/contacts/contacts-selectors';

// import ContactList from './ContactList/ContactList';
// import PhoneBookFilter from './PhoneBookFilter/PhoneBookFilter';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
// import ContactsPage from './Pages/ContactsPage/ContactsPage'; //---------------------------------

import styles from './App.module.scss';

const App = () => {
  // const filteredContacts = useSelector(getFilteredContacts);
  // const isContacts = Boolean(filteredContacts.length);

  return (
    <>
      {/* <div className={styles.wrapper}> */}

      <PhoneBookForm />

      {/* <ContactsPage /> */}
      {/* </div> */}
    </>

    // {/* <Link to={'contacts'}>Contacts page</Link>
    // <Outlet /> */}
    // {/* <div className={styles.block}>
    //   <h2 className={styles.title}>Contacts</h2>
    //   <PhoneBookFilter />
    //   <ContactList />
    //   {!isContacts && <p>Contacts list is empty!</p>}
    // </div> */}
  );
};

export default App;
