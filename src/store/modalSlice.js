import { createSlice } from "@reduxjs/toolkit";

const initialState = { showModal: false };

const modalSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
