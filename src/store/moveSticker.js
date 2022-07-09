import { cloneDeep } from "lodash";
import { stickerActions } from "./stickerSlice";

export default function moveSticker(stickerId, source, destination) {
  return (dispatch, getState) => {
    const state = cloneDeep(getState().stickerItems);
    const stickerFound = state[source].find(
      (sticker) => sticker.id === stickerId
    );

    if (stickerFound) {
      if (destination) {
        state[destination].push(stickerFound);
      }

      state[source] = state[source].filter(
        (sticker) => sticker.id !== stickerId
      );

      dispatch(stickerActions.setChange(true));

      const stickersChange = {
        [source]: state[source],
      };

      if (destination) {
        stickersChange[destination] = state[destination];
      }

      dispatch(stickerActions.replaceStickers(stickersChange));
    }
  };
}
