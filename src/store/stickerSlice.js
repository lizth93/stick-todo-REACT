import { createSlice } from "@reduxjs/toolkit";

const stickerSlice = createSlice({
  name: "itemsStickers",
  initialState: {
    stickers: [],
    trashStickers: [],
    changed: false,
    stickerToEdit: null,
    stickerStartMove: null,
    stickerEndMove: null,
  },
  reducers: {
    setChange(state, action) {
      state.change = action.payload;
    },

    replaceStickers(state, action) {
      state.changed = true;
      if (action.payload.stickers) {
        state.stickers = action.payload.stickers;
      }
      if (action.payload.trashStickers) {
        state.trashStickers = action.payload.trashStickers;
      }
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
    setStickerMove(state, action) {
      state.stickerStartMove = action.payload;
    },
    setStickerEnd(state, action) {
      state.stickerEndMove = action.payload;
    },
  },
});

export const stickerActions = stickerSlice.actions;

export default stickerSlice;
