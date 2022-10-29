import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    idUser: localStorage.getItem('idUser') ? JSON.parse(localStorage.getItem('idUser')) : '',
    loading: false,
  },
  reducers: {
    setIdUser: (state, action) => {
      state.idUser = action.payload;
      localStorage.setItem('idUser', JSON.stringify(state.idUser));
    },
  },
});

export const { setIdUser } = userSlice.actions;
export default userSlice.reducer;
