import { createSlice } from "@reduxjs/toolkit";

const stickerSlice = createSlice({
  name: "itemsStickers",
  initialState: {
    stickers: [],
    trashStickers: [],
    changed: false,
    stickerToEdit: null,
  },
  reducers: {
    setChange(state, action) {
      state.change = action.payload;
    },
    replaceStickers(state, action) {
      state.changed = true;
      state.stickers = action.payload.stickers;
      state.trashStickers = action.payload.trashStickers;
    },
    setStickerToEdit(state, action) {
      state.stickerToEdit = action.payload;
    },

    restoreStickers(state) {
      state.changed = true;
      state.stickers = state.stickers.concat(state.trashStickers);
      state.trashStickers = [];
    },

    destroyStickers(state) {
      state.changed = true;
      state.trashStickers = [];
    },
  },
});

export const stickerActions = stickerSlice.actions;

export default stickerSlice;
