import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./slices/MainSlice";

const store = configureStore({
  reducer: {
    main: MainSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
