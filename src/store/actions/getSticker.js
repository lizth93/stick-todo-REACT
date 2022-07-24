import { uiActions } from "../uiSlice";
import { stickerActions } from "../stickerSlice";

export const getSticker = () => {
  return (dispatch) => {
    try {
      const stickersState = JSON.parse(localStorage.getItem("stickers"));
      dispatch(
        stickerActions.replaceStickers({
          stickers: stickersState?.stickers || [],
          trashStickers: stickersState?.trashStickers || [],
        })
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
