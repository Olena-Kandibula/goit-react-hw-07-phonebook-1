// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// import phoneBookReducer from './phonebook/phonebook-reducers';

// // console.log(process.env.NODE_ENV);//development OR PRODUCTION
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// // const persistConfig = {
// //   key: 'contacts',
// //   storage,
// //   blacklist: ['filter'],
// // };

// const store = configureStore({
//   reducer: {
//     phoneBook: phoneBookReducer,
//      // phoneBook: persistReducer(persistConfig, phoneBookReducer),
//   },
//   middleware: middleware,
//   // devTools: process.env.NODE_ENV === 'development',
// });
// // const persistor = persistStore(store);

// // eslint-disable-next-line import/no-anonymous-default-export
// // export default { store};

// ====== react redux============

// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, combineReducers } from 'redux';
// import counterReducer from './counter/counter-reducers';
// import phoneBookReducer from './phonebook/phonebook-reducers';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   phoneBook: phoneBookReducer,
// });

// // devTools: process.env.NODE_ENV === 'development',

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
