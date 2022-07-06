import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice.js";
import stickerSlice from "./stickerSlice.js";

export const modalActions = modalSlice.actions;
const store = configureStore({
  reducer: { modal: modalSlice.reducer, stickerItems: stickerSlice.reducer },
});

export default store;
