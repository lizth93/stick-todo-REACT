import { uiActions } from "../uiSlice";

export const setStickers = (stickers) => {
  return (dispatch) => {
    try {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending sticker data!",
        })
      );

      localStorage.setItem("stickers", JSON.stringify(stickers));

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent sticker data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending sticker data failed!",
        })
      );
    }
  };
};
