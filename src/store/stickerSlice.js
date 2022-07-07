import { createSlice } from "@reduxjs/toolkit";

const stickerSlice = createSlice({
  name: "itemsStickers",
  initialState: {
    stickers: [],
    trashStickers: [],
    changed: false,
  },
  reducers: {
    setChange(state, action) {
      state.change = action.payload;
    },
    replaceStickers(state, action) {
      state.stickers = action.payload.stickers;
      state.trashStickers = action.payload.trashStickers;
    },
    addSticker(state, action) {
      const newSticker = action.payload;
      state.changed = true;
      state.stickers.push({
        id: newSticker.id,
        text: newSticker.text,
        color: newSticker.color,
      });
    },
    restoreSticker(state, action) {
      state.changed = true;
      const id = action.payload;
      const stickerOnTrash = state.trashStickers.find(
        (sticker) => sticker.id === id
      );

      if (stickerOnTrash) {
        state.stickers.push(stickerOnTrash);

        state.trashStickers = state.trashStickers.filter(
          (sticker) => sticker.id !== id
        );
      }
    },

    restoreStickers(state) {
      state.changed = true;
      state.stickers = state.stickers.concat(state.trashStickers);
      state.trashStickers = [];
    },
  },
});

export const stickerActions = stickerSlice.actions;

export default stickerSlice;
