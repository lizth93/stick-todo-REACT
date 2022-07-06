import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import stickerSlice from "./stickerSlice.js";

export const uiActions = uiSlice.actions;
const store = configureStore({
  reducer: { ui: uiSlice.reducer, stickerItems: stickerSlice.reducer },
});

export default store;
