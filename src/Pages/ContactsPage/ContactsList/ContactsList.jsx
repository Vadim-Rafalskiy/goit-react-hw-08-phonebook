import { nanoid } from 'nanoid';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import ContactItem from 'components/ContactItem/ContactItem';

// import { fetchDeleteContact } from 'redux/contacts/contacts-operation';
import { fetchDeleteContact } from '../../../redux/contacts/contacts-operation';
import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import { fetchAllContacts } from '../../../redux/contacts/contacts-operation';

import styles from '../ContactsPage.module.scss';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const elements = contacts.map(({ id, name, number }) => (
    <li key={nanoid()} className={styles.contactItem}>
      {name}: {number}
      <button className={styles.btnDelete} onClick={() => handleDeleteContact(id)} type="button">
        Delete
      </button>
    </li>

    // <ContactItem  contact={contact} />
  ));

  return <ul>{elements}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};
