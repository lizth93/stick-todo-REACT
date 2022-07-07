import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { sendStickerData } from "../store/stickerActions";
import { useDispatch } from "react-redux/es/exports";

export default function useSaveStickers() {
  const executed = useRef(false);
  const stickers = useSelector((state) => state.stickerItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (executed.current) {
      executed.current = false;
      return;
    }

    if (stickers.changed) {
      dispatch(sendStickerData(stickers));
    }
  }, [stickers, dispatch]);
}
