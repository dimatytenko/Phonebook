import axios from 'axios';

axios.defaults.baseURL = 'https://61f699812e1d7e0017fd6e0f.mockapi.io';

export async function fetchContacts() {
  const data = await axios.get(`/contacts`).then(res => res.data);
  return data;
}

export const addContact = async contact => {
  const data = await axios.post('/contacts', contact).then(({ data }) => data);
  return data;
};

export const deleteContact = async contactId => {
  const data = await axios.delete(`/contacts/${contactId}`);
  return data;
};
