import { stickerActions } from "./stickerSlice";

const linkFirebase =
  "https://stickers-app-72d0c-default-rtdb.firebaseio.com/sticker.json";

export const fetchStickerData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(linkFirebase);

      if (!response.ok) {
        throw new Error("Sending sticker data failed.");
      }

      const data = await response.json();
      return data;
    };

    try {
      const stickerData = await fetchData();
      console.log(stickerData, "pringing sticker data");
      dispatch(
        stickerActions.replaceStickers({
          stickers: stickerData.stickers || [],
          trashStickers: stickerData.trashStickers || [],
        })
      );
    } catch (error) {
      console.log("error");
    }
  };
};

export const sendRequest = async (stickers) => {
  const response = await fetch(linkFirebase, {
    method: "POST",
    body: JSON.stringify({
      stickers,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Sending cart data failed.");
  }

  try {
    await sendRequest();
  } catch (error) {
    console.log(error);
  }
};
