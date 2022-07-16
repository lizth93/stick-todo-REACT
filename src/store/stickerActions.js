import { uiActions } from ".";
import { stickerActions } from "./stickerSlice";

export const fetchStickerData = () => {
  return (dispatch) => {
    const fetchData = localStorage.getItem("stickers");

    try {
      const stickerData = JSON.parse(fetchData);
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

// const linkFirebase =
//   "https://stickers-app-72d0c-default-rtdb.firebaseio.com/stickers.json";

// export const fetchStickerData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(linkFirebase);

//       if (!response.ok) {
//         throw new Error("Sending sticker data failed.");
//       }

//       const data = await response.json();
//       return data;
//     };

//     try {
//       const stickerData = await fetchData();

//       dispatch(
//         stickerActions.replaceStickers({
//           stickers: stickerData.stickers || [],
//           trashStickers: stickerData.trashStickers || [],
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Fetching cart data failed!",
//         })
//       );
//     }
//   };
// };

export const setStickersLocalStorage = (stickers) => {
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

// export const sendStickerData = (stickers) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending sticker data!",
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(linkFirebase, {
//         method: "PUT",
//         body: JSON.stringify(stickers),
//       });
//       if (!response.ok) {
//         throw new Error("Sending sticker data failed.");
//       }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success!",
//           message: "Sent sticker data successfully!",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Sending sticker data failed!",
//         })
//       );
//     }
//   };
// };
