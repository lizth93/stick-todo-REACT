import { useEffect } from "react";
import { useDispatch } from "react-redux";
//own
import { getSticker } from "../store/actions/getSticker";

export default function useInitializeStickers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSticker());
  }, [dispatch]);
}
