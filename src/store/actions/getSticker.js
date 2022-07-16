import { uiActions } from "../uiSlice";
import { stickerActions } from "../stickerSlice";

export const getSticker = () => {
  return (dispatch) => {
    const fetchData = localStorage.getItem("stickers");

    let stickerData;

    try {
      stickerData = JSON.parse(fetchData);
      dispatch(
        stickerActions.replaceStickers({
          stickers: stickerData.stickers || [],
          trashStickers: stickerData.trashStickers || [],
        })
      );

      return stickerData;
    } catch (error) {
      if (!stickerData) return;
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
