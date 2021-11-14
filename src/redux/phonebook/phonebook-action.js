// import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid';

// const addContact = createAction('phonebook/Add', ({ name, number }) => ({
//   payload: {
//     name: name,
//     number: number,
//     id: shortid.generate(),
//   },
// }));

// const deleteContact = createAction('phonebook/Delete');
// const changeFilter = createAction('filter/ChangeFilter');

// export { addContact, deleteContact, changeFilter };

// ===== react redux ============

// import shortid from 'shortid';
// import phoneBookTypes from './phonebook-types';

// export const addContact = ({ name, number }) => ({
//   type: phoneBookTypes.ADD,
//   payload: {
//     name: name,
//     number: number,
//     id: shortid.generate(),
//   },
// });

// export const deleteContact = idContact => ({
//   type: phoneBookTypes.DELETE,
//   payload: idContact,
// });

// export const changeFilter = value => ({
//   type: phoneBookTypes.CHANGE_FILTER,
//   payload: value,
// });
