import { useSelector } from 'react-redux';

import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';

import ContactList from '../../ContactList/ContactList';
import PhoneBookFilter from '../../PhoneBookFilter/PhoneBookFilter';

import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const isContacts = Boolean(filteredContacts.length);

  return (
    <>
      <div className={styles.block}>
        <h2 className={styles.title}>Contacts</h2>
        <PhoneBookFilter />
        <ContactList />
        {!isContacts && <p>Contacts list is empty!</p>}
      </div>
    </>
  );
};

export default ContactsPage;
