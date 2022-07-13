import { cloneDeep } from "lodash";
import { stickerActions } from "./stickerSlice";

export default function dragAndDrop(stickerStart, source, stickerEnd) {
  return (dispatch, getState) => {
    const state = cloneDeep(getState().stickerItems);

    if (stickerEnd === null || stickerEnd.id === "") return;
    console.log("start", stickerStart, "end", stickerEnd);
    const stickerIndexStart = state[source].findIndex(
      (sticker) => sticker.id === stickerStart.id
    );
    const stickerIndexEnd = state[source].findIndex(
      (sticker) => sticker.id === stickerEnd.id
    );

    console.log("index, start:", stickerIndexStart, "end:", stickerIndexEnd);

    if (
      stickerIndexStart === -1 ||
      (stickerIndexEnd === -1 && stickerIndexEnd === stickerIndexStart)
    )
      return;

    let temporaly = stickerStart;

    state.stickers.splice(stickerIndexStart, 1, stickerEnd);
    state.stickers.splice(stickerIndexEnd, 1, temporaly);

    dispatch(stickerActions.setChange(true));

    const stickersChange = {
      [source]: state[source],
    };

    dispatch(stickerActions.replaceStickers(stickersChange));
  };
}
