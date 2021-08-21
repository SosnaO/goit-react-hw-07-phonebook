import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import contactsReducer from './counter/counter-reducer'
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}).concat(logger);

const persistConfig = {
  key: 'contacts',
  storage,
   blacklist:['filter']
}

const store = configureStore({
  reducer:{
    contacts: persistReducer(persistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor=persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };





//  Redux

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducers from './contacts/contacts-reduser';

// const rootReducer = combineReducers({
//   contacts: contactsReducers,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;