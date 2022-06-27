import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    const contacts = await contactsAPI.addContact(contact);
    return contacts;
  },
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await contactsAPI.deleteContact(contactId);
    return contactId;
  },
);
