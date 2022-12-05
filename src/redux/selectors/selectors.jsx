import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filterName) => {
//     let visibleContacts = [];

//     if (contacts) {
//       visibleContacts = contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filterName)
//       );
//     }
//     return visibleContacts;
//   }
// );
