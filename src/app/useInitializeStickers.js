import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchStickerData } from "../store/stickerActions";

export default function useInitializeStickers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStickerData());
  }, [dispatch]);
}
