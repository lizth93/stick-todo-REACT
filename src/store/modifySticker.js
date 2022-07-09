import { cloneDeep } from "lodash";
import { stickerActions } from "./stickerSlice";

export default function modifySticker(stickerData) {
  return (dispatch, getState) => {
    const state = cloneDeep(getState().stickerItems);
    const indexToSticker = state.stickers.findIndex(
      (sticker) => sticker.id === stickerData.id
    );

    state.stickers[indexToSticker] = {
      id: stickerData.id,
      text: stickerData.text,
      color: stickerData.color,
    };

    dispatch(stickerActions.setChange(true));
    dispatch(
      stickerActions.replaceStickers({
        stickers: state.stickers,
        trashStickers: state.trashStickers,
      })
    );
  };
}
