import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';

const setPending = state => {
  state.isLoading = true;
};
const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: setPending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: setError,

    [addContact.pending]: setPending,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: setError,

    [deleteContact.pending]: setPending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
      // state.items = state.items.filter(item => item.id !== action.payload);
    },
    [deleteContact.rejected]: setError,
  },
});

export const contactsReducer = contactsSlice.reducer;

// 2. BUILDER
// extraReducers: (builder) => {
//  builder.addCase(fetchContacts.pending, (state) => {
//  state.isLoading = true;
// },
//  builder.addCase(fetchContacts.fulfilled, (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// },
//  builder.addCase(fetchContacts.rejected, (state, action) => {
//  state.isLoading = false;
//  state.error = action.payload;
// },

// 3. CLASSIC
// extraReducers: {
// [fetchContacts.pending]: state => {
//   return { ...state, isLoading: true };
// },
// [fetchContacts.fulfilled]: (state, action) => {
//   return { ...state, isLoading: false, error: null, items: action.payload };
// },
// [fetchContacts.rejected]: (state, action) => {
//   return { ...state, isLoading: false, error: action.payload };
// },
