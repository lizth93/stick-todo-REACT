import { cloneDeep } from "lodash";
import { stickerActions } from "./stickerSlice";

export default function addSticker(stickerData) {
  return (dispatch, getState) => {
    const state = cloneDeep(getState().stickerItems);
    const existSticker = state.stickers.find(
      (sticker) => sticker.id === stickerData.id
    );

    if (!existSticker) {
      state.stickers.push({
        id: stickerData.id,
        text: stickerData.text,
        color: stickerData.color,
      });
    }

    dispatch(stickerActions.setChange(true));
    dispatch(
      stickerActions.replaceStickers({
        stickers: state.stickers,
        trashStickers: state.trashStickers,
      })
    );
  };
}
