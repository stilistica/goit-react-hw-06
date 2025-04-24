import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contactsSlice.js";
import filtersReducer from "./filtersSlice.js";

const persistConfig = {
  key: "contacts",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);
const rootReducer = combineReducers({
  contacts: persistedReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export const persistor = persistStore(store);
