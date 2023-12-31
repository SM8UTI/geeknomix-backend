import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBar: true,
};

const MainSlice = createSlice({
  name: "MainSlice",
  initialState,
  reducers: {
    setSideBar: (state, action) => {
      state.sideBar = action.payload;
    },
  },
});

export const { setSideBar } = MainSlice.actions;
export default MainSlice.reducer;
