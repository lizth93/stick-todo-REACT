import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { sendRequest } from "../store/stickerActions";

export default function useSaveStickers() {
  const executed = useRef(false);
  const stickers = useSelector((state) => state.stickerItems);

  useEffect(() => {
    if (executed.current) {
      executed.current = false;
      return;
    }

    if (stickers.changed) {
      sendRequest(stickers);
    }
  }, [stickers]);
}
