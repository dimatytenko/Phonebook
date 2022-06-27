import { createSlice } from '@reduxjs/toolkit';

import * as contactsOperations from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [contactsOperations.fetchContacts.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [contactsOperations.fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
    },
    [contactsOperations.fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [contactsOperations.addContact.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [contactsOperations.addContact.fulfilled](state, { payload }) {
      state.items = [...state.items, payload];
      state.isLoading = false;
    },
    [contactsOperations.addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [contactsOperations.deleteContact.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [contactsOperations.deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = state.items.filter(contact => contact.id !== payload);
      state.isLoading = false;
    },
    [contactsOperations.deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { filter } = contactsSlise.actions;
export const contacts = contactsSlise.reducer;
