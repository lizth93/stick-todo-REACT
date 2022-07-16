import { uiActions } from "../uiSlice";
import { stickerActions } from "../stickerSlice";

export const getSticker = () => {
  return (dispatch) => {
    let stickersState;

    try {
      stickersState = JSON.parse(localStorage.getItem("stickers"));
      dispatch(
        stickerActions.replaceStickers({
          stickers: stickersState?.stickers || [],
          trashStickers: stickersState?.trashStickers || [],
        })
      );

      return stickersState;
    } catch (error) {
      if (!stickersState) return;
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
