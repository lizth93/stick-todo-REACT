import { createSlice } from "@reduxjs/toolkit";

const initialState = { showModal: false, notification: null };

const uiSlice = createSlice({
  name: "uiState",
  initialState,
  reducers: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
