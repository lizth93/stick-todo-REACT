const linkFirebase =
  "https://stickers-app-72d0c-default-rtdb.firebaseio.com/sticker.json";

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
