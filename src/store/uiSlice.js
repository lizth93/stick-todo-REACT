import { createSlice } from "@reduxjs/toolkit";

const initialState = { showModal: false, typeModal: null, notification: null };

const uiSlice = createSlice({
  name: "uiState",
  initialState,
  reducers: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    setTypeModal(state, action) {
      state.typeModal = action.payload;
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
