import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "../slices/bookSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

const persistConfing = {
  key: "root",
  storage,
  whitelist: ["book"],
};

const rootReducer = combineReducers({
  book: bookReducer,
});

const persistedReducer = persistReducer(persistConfing, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      createStateSyncMiddleware({
        blacklist: ["persist/PERSIST", "persist/REHYDRATE"],
      })
    ),
});

initMessageListener(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
