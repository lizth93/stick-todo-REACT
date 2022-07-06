import { createSlice } from "@reduxjs/toolkit";

const stickerSlice = createSlice({
  name: "sticker",
  initialState: {
    stickers: [],
  },
  reducers: {
    addSticker(state, action) {
      const newSticker = action.payload;
      state.stickers.push({
        id: newSticker.id,
        text: newSticker.text,
        color: newSticker.color,
      });

      console.log(newSticker, "from store");
    },
    removeSticker(state, action) {
      const id = action.payload;
      const existingSticker = state.stickers.find(
        (sticker) => sticker.id === id
      );

      if (existingSticker) {
        state.stickers = state.stickers.filter((sticker) => sticker.id !== id);
      }
    },
  },
});

export const stickerActions = stickerSlice.actions;

export default stickerSlice;
