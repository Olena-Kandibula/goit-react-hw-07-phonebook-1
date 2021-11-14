// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';

// import * as actions from './phonebook-action';
// import contactsJson from '../../contacts.json';

// const initialState =
//   JSON.parse(localStorage.getItem('contacts')) ?? contactsJson;

// const addNewContact = (state, payload) => [payload, ...state];

// const deleteContact = (state, payload) =>
//   state.filter(({ id }) => id !== payload);

// const contactsReducer = createReducer(initialState, {
//   [actions.addContact]: (state, { payload }) => addNewContact(state, payload),
//   [actions.deleteContact]: (state, { payload }) =>
//     deleteContact(state, payload),
// });

// const filterReducer = createReducer('', {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// const phoneBookReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export default phoneBookReducer;

// ===== react redux ============

// import { combineReducers } from 'redux';
// import phoneBookTypes from './phonebook-types';

// import contactsJson from '../../contacts.json';

// const initialState =
//   JSON.parse(window.localStorage.getItem('contacts')) ?? contactsJson;

// const contactsReducer = (state = initialState, { type, payload }) => {

//   switch (type) {
//     case phoneBookTypes.ADD:
//       const newStateAdd = [payload, ...state];
//       window.localStorage.setItem('contacts', JSON.stringify(newStateAdd));
//       return newStateAdd;

//     case phoneBookTypes.DELETE:
//       const newStateDelete = state.filter(({ id }) => id !== payload);
//       window.localStorage.setItem('contacts', JSON.stringify(newStateDelete));
//       return newStateDelete;

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case phoneBookTypes.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const phoneBookReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export default phoneBookReducer;
