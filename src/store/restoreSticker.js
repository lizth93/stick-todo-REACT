import { cloneDeep } from "lodash";
import { stickerActions } from "./stickerSlice";

export default function restoreSticker(stickerId) {
  return (dispatch, getState) => {
    const state = cloneDeep(getState().stickerItems);
    const stickerOnTrash = state.trashStickers.find(
      (sticker) => sticker.id === stickerId
    );

    if (stickerOnTrash) {
      state.stickers.push(stickerOnTrash);
      state.trashStickers = state.trashStickers.filter(
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
