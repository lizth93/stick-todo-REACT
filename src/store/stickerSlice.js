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

    addSticker(state, action) {
      const newSticker = action.payload;
      const existSticker = state.stickers.find(
        (sticker) => sticker.id === newSticker.id
      );
      state.changed = true;
      if (!existSticker) {
        state.stickers.push({
          id: newSticker.id,
          text: newSticker.text,
          color: newSticker.color,
        });
      }
    },
    modifySticker(state, action) {
      state.changed = true;
      const newSticker = action.payload;
      const indexToSticker = state.stickers.findIndex(
        (sticker) => sticker.id === newSticker.id
      );

      console.log("sticker a modifi is on index:", indexToSticker);

      if (indexToSticker) {
        state.stickers[indexToSticker] = {
          id: newSticker.id,
          text: newSticker.text,
          color: newSticker.color,
        };
      }
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
