import { createAsyncThunk } from '@reduxjs/toolkit';
import * as connectionsAPI from '../../services/connections-API';

const token = connectionsAPI.token;

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const data = await connectionsAPI.fetchRegister(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return error.rejectWithValue();
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await connectionsAPI.fetchLogIn(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return error.rejectWithValue();
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await connectionsAPI.fetchLogOut;
    token.unset();
  } catch (error) {}
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const data = await connectionsAPI.fetchUsers();
      return data;
    } catch (error) {
      return error.rejectWithValue();
    }
  },
);
