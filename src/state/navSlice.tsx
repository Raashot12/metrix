import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// Slice
const navSlice = createSlice({
  name: 'navbar status',
  initialState: true,
  reducers: {
    isOpened: (state, action) => {
      state = action.payload;
    },
    isClosed: (state, action) => {
      state = action.payload;
    },
    setMobile: (state, action) => {
      state = action.payload;
    },
  },
});

// Actions
export const { isOpened, isClosed, setMobile } = navSlice.actions;
export default navSlice;
export const navBarStatus = (state: RootState) => state.navbarStatus;
