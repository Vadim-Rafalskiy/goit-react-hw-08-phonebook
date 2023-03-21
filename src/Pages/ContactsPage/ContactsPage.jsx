import { useSelector } from 'react-redux';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { fetchAddContact } from 'redux/contacts/contacts-operation';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';

import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactsList/ContactsList';
import PhoneBookFilter from './PhoneBookFilter/PhoneBookFilter';

import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const isContacts = Boolean(filteredContacts.length);

  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(fetchAddContact(data));
    // setState(initialState);
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const { name, number } = state;

  //   dispatch(fetchAddContact({ name, number }));
  //   setState(initialState);
  // };

  return (
    <>
      <div className={styles.block}>
        <h2 className={styles.title}>Contacts</h2>
        <PhoneBookForm onSubmit={handleSubmit} />
        <PhoneBookFilter />
        <ContactList />
        {!isContacts && <p>Contacts list is empty!</p>}
      </div>
    </>
  );
};

export default ContactsPage;
