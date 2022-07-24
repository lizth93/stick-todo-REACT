import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { setStickers } from "../store/actions/setStickers";

export default function useSaveStickers() {
  const stickers = useSelector((state) => state.stickerItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stickers.changed) {
      dispatch(setStickers(stickers));
    }
  }, [stickers, dispatch]);
}
