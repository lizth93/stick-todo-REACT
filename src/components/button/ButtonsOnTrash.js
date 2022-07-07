import { Fragment } from "react";
import Button from "./Button.styled";
import { useDispatch } from "react-redux";
import { stickerActions } from "../../store/stickerSlice";

const ButtonsOnTrash = () => {
  const dispatch = useDispatch();

  const handleRestoreStickers = () => {
    dispatch(stickerActions.restoreStickers());
  };

  const handleDestroyStickers = () => {
    dispatch(stickerActions.destroyStickers());
  };

  return (
    <Fragment>
      <Button
        className="btn-trash btn-restore-all"
        onClick={handleRestoreStickers}
      >
        Restore All
      </Button>
      <Button
        className="btn-trash btn-delete-all"
        onClick={handleDestroyStickers}
      >
        Delete All
      </Button>
    </Fragment>
  );
};

export default ButtonsOnTrash;
