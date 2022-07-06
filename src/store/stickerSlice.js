import { createSlice } from "@reduxjs/toolkit";

const stickerSlice = createSlice({
  name: "sticker",
  initialState: {
    stickers: [],
    trashStickers: [],
  },
  reducers: {
    addSticker(state, action) {
      const newSticker = action.payload;
      state.stickers.push({
        id: newSticker.id,
        text: newSticker.text,
        color: newSticker.color,
      });
    },
    removeSticker(state, action) {
      const id = action.payload;
      const existingSticker = state.stickers.find(
        (sticker) => sticker.id === id
      );

      if (existingSticker) {
        state.trashStickers.push(existingSticker);

        state.stickers = state.stickers.filter((sticker) => sticker.id !== id);
      }
    },

    restoreSticker(state, action) {
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
      state.stickers = state.stickers.concat(state.trashStickers);
      state.trashStickers = [];
    },
  },
});

export const stickerActions = stickerSlice.actions;

export default stickerSlice;
