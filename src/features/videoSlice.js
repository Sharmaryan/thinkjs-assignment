import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoLinks: [],
};

const videoSlice = createSlice({
  name: "videoSlice",
  initialState,
  reducers: {
    addVideoLink: (state, action) => {
      state.videoLinks.push(action.payload);
    },
    deleteVideoLink:(state, action) => {
      state.videoLinks = state.videoLinks.filter(item => item.id !== action.payload)
    }
  },
});

export default videoSlice.reducer;
export const { addVideoLink, deleteVideoLink } = videoSlice.actions;
