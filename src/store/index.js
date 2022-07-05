import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { showModal: false };

const modalSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    toggleModal(state) {
      state.showModal = !state.showModal;
      console.log(state, "printing from store");
    },
  },
});

export const modalActions = modalSlice.actions;
const store = configureStore({ reducer: { modal: modalSlice.reducer } });

export default store;
