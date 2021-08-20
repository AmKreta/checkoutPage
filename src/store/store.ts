import { createStore, Store } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import reducer from "./reducer";

const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store: Store = createStore(persistedReducer);

export const persistor = persistStore(store);
export type State = ReturnType<typeof persistedReducer>;
export default store;
