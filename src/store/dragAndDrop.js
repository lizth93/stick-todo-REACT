import { cloneDeep } from "lodash";
import { stickerActions } from "./stickerSlice";

export default function dragAndDrop(stickerStart, stickerEnd) {
  return (dispatch, getState) => {
    const state = cloneDeep(getState().stickerItems);
    const stickerStart = state.stickerStartMove;
    const stickerEnd = state.stickerEndMove;

    if (stickerEnd === null || stickerEnd.id === "") return;

    const stickerIndexStart = state.stickers.findIndex(
      (sticker) => sticker.id === stickerStart.id
    );
    const stickerIndexEnd = state.stickers.findIndex(
      (sticker) => sticker.id === stickerEnd.id
    );

    if (
      stickerIndexStart === -1 ||
      (stickerIndexEnd === -1 && stickerIndexEnd === stickerIndexStart)
    )
      return;

    let temporaly = stickerStart;

    state.stickers.splice(stickerIndexStart, 1, stickerEnd);
    state.stickers.splice(stickerIndexEnd, 1, temporaly);

    dispatch(stickerActions.setChange(true));

    dispatch(
      stickerActions.replaceStickers({
        stickers: state.stickers,
        trashStickers: state.trashStickers,
      })
    );

    dispatch(stickerActions.setStickerMove(null));
    dispatch(stickerActions.setStickerEnd(null));
  };
}
