import { cloneDeep } from "lodash";
import { stickerActions } from "./stickerSlice";

export default function removeSticker(stickerId) {
  return (dispatch, getState) => {
    const state = cloneDeep(getState().stickerItems);
    const existingSticker = state.stickers.find(
      (sticker) => sticker.id === stickerId
    );

    if (existingSticker) {
      state.trashStickers.push(existingSticker);
      state.stickers = state.stickers.filter(
        (sticker) => sticker.id !== stickerId
      );

      dispatch(stickerActions.setChange(true));
      dispatch(
        stickerActions.replaceStickers({
          stickers: state.stickers,
          trashStickers: state.trashStickers,
        })
      );
    }
  };
}
