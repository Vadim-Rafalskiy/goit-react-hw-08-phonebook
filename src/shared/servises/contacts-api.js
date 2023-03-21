// import axios from 'axios';
import instance from './auth-api';

// const contactsInstance = axios.create({
//   baseURL: 'https://640f7f3fcde47f68db4c245f.mockapi.io/api/contacts',
// });

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = instance.delete(`/contacts/${id}`);
  return data;
};
