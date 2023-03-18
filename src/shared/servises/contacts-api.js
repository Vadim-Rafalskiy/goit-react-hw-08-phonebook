import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://640f7f3fcde47f68db4c245f.mockapi.io/api/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = contactsInstance.delete(`/${id}`);
  return data;
};
