import axios from 'axios';

axios.defaults.baseURL = 'https://61f699812e1d7e0017fd6e0f.mockapi.io';

export async function fetchContacts() {
  return await axios.get(`/contacts`).then(res => res.data);
}

export const addContact = async contact => {
  return await axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteContact = async contactId => {
  return await axios.delete(`/contacts/${contactId}`);
};
