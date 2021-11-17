import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://618eb0d750e24d0017ce13d2.mockapi.io/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error('error server!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      console.log(' delete', response);
      if (!response.ok) {
        throw new Error("Can't delete contact!Error Server!");
      }
      dispatch(deleteContact(id));
      const data = await response.json();
      console.log('delete data', data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContactAPI = createAsyncThunk(
  'contacts/addcontact',
  async function (contactNew, { rejectWithValue, dispatch }) {
    // {name,phone,id}
    console.log('contact slise', contactNew);
    // console.log('contact=', JSON.stringify(contact));
    try {
      // const contactNew = {
      //     name: name,
      //     phone: phone,
      //     id:id,

      // };
      console.log(contactNew);

      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactNew),
      });
      // console.log('contact', contact)
      console.log(' add response', response);

      if (!response.ok) {
        throw new Error("Can't add contact! Error Server!");
      }
      const data = await response.json();
      // const data = await response.then(res => res.json())
      // dispatch(addContact(data))
      // dispatch(addContact(contactNew))
      // return data;
      // return (dispatch) => {
      //     dispatch(addContact(data))
      // }
      // return
      dispatch(addContact(data));
      // }
      // console.log('add data',data )
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// export const filterContact = createAsyncThunk(
//     'contacts/filter',
//     async function (value, { rejectWithValue, dispatch }) {
//         try {
//             const response = await fetch(`https://618eb0d750e24d0017ce13d2.mockapi.io/api/contacts?filter=${value}`, {
//              metod:'GET',
//             })
//             // console.log(response)
//          if (!response.ok) {
//             throw new Error("Can't delete contact!Error Server!");
//          }
//             dispatch(deleteContact({id}));

//         } catch (error) {
//              return rejectWithValue(error.message)
//         }
//     }
// );

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};
const setPending = state => {
  // state.status = 'loading';
  state.error = null;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    status: null,
    error: null,
  },

  reducers: {
    addContact(state, action) {
      console.log(action.payload);
      state.contacts.push(action.payload);
      //   state.contacts.concat(action.payload);

      //           state.contacts = [action.payload, ...state.contacts];
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },

    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: setPending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.contacts = action.payload;
      state.error = null;
    },

    [fetchContacts.rejected]: setError,

    [addContactAPI.pending]: setPending,
    [addContactAPI.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.contacts = [action.payload, ...state.contacts];
      //  state.contacts = action.payload;
      state.error = null;
    },
    [addContactAPI.rejected]: setError,

    [removeContact.pending]: setPending,
    [removeContact.fulfilled]: state => {
      state.status = 'resolved';
      state.error = null;
    },
    [removeContact.rejected]: setError,
  },
});

export const {
  // fetchContacts,
  addContact,
  deleteContact,
  changeFilter,
} = contactSlice.actions;
export default contactSlice.reducer;
// ==============================================================
// import { createSlice } from '@reduxjs/toolkit';
// import shortid from 'shortid';

// import contactsJson from '../contacts.json';

// const initialStateContacts =
//   JSON.parse(localStorage.getItem('contacts')) ?? contactsJson;

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: initialStateContacts,
//     filter: '',
//   },

//   reducers: {
//     fetchContacts(state, action) {},

//     addContact(state, action) {
//       // console.log('state ADD', state.contacts)
//       console.log('action ADD', action.payload);
//       const contact = {
//         name: action.payload.name,
//         number: action.payload.number,
//         completed: false,
//         id: shortid.generate(),
//       };
//       state.contacts = [contact, ...state.contacts];
//     },

//     deleteContact(state, action) {
//       // console.log('state DELL',contacts)
//       console.log('action DELL', action.payload);
//       //  console.log('action22')
//       state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
//     },

//     changeFilter(state, action) {
//       //  console.log('actionCHAnGE', action.payload)
//       //   console.log('filter CHAnGE', state.filter, state.contacts)
//       state.filter = action.payload;
//       // const normalizedFilter = state.filter.toLowerCase();
//       // state.contacts = state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//     },

//     // filterContact(state, action) {
//     //      state.filter = action.payload
//     //     // const normalizedFilter = state.filter.toLowerCase();
//     //     // state.contacts = state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//     // },
//   },
// });

// // const normalizedFilter = filter.toLowerCase();
// //   return contacts.filter(contact =>
// //     contact.name.toLowerCase().includes(normalizedFilter),
// // const phoneBookReducer = combineReducers({
// //   contacts: contactsReducer,
// //   filter: filterReducer,
// // });
// // const filterReducer = createReducer('', {
// //   [actions.changeFilter]: (_, { payload }) => payload,
// // });

// // const phoneBookReducer = combineReducers({
// //   contacts: contactsReducer,
// //   filter: filterReducer,
// // });
// export const { fetchContacts, addContact, deleteContact, changeFilter } =
//   contactSlice.actions;
// export default contactSlice.reducer;
