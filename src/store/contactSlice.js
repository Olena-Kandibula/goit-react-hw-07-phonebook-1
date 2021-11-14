import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

import contactsJson from '../contacts.json';

const initialStateContacts =
  JSON.parse(localStorage.getItem('contacts')) ?? contactsJson;

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initialStateContacts,
    filter: '',
  },

  reducers: {
    fetchContacts(state, action) {},

    addContact(state, action) {
      // console.log('state ADD', state.contacts)
      console.log('action ADD', action.payload);
      const contact = {
        name: action.payload.name,
        number: action.payload.number,
        completed: false,
        id: shortid.generate(),
      };
      state.contacts = [contact, ...state.contacts];
    },

    deleteContact(state, action) {
      // console.log('state DELL',contacts)
      console.log('action DELL', action.payload);
      //  console.log('action22')
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },

    changeFilter(state, action) {
      //  console.log('actionCHAnGE', action.payload)
      //   console.log('filter CHAnGE', state.filter, state.contacts)
      state.filter = action.payload;
      // const normalizedFilter = state.filter.toLowerCase();
      // state.contacts = state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    },

    // filterContact(state, action) {
    //      state.filter = action.payload
    //     // const normalizedFilter = state.filter.toLowerCase();
    //     // state.contacts = state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    // },
  },
});

// const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
// const phoneBookReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
// const filterReducer = createReducer('', {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// const phoneBookReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });
export const { fetchContacts, addContact, deleteContact, changeFilter } =
  contactSlice.actions;
export default contactSlice.reducer;
