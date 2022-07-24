import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store";
import modifySticker from "../../store/modifySticker";
import addSticker from "../../store/addSticker";
import Modal from "../modal/Modal.styled";

const SelectedModal = () => {
  const { stickerToEdit, typeModal, showModal } = useSelector((state) => ({
    stickers: state.stickerItems.stickers,
    stickerToEdit: state.stickerItems.stickerToEdit,
    typeModal: state.ui.typeModal,
    showModal: state.ui.showModal,
    stickerStartMove: state.stickerItems.stickerStartMove,
    stickerEndMove: state.stickerItems.stickerEndMove,
  }));
  const dispatch = useDispatch();

  const id = Math.random().toString();

  const handleModifySticker = (text, color) => {
    dispatch(
      modifySticker({
        id: stickerToEdit.id,
        color,
        text,
      })
    );
    // TODO: Change with actions "openModal" or "closeModal"
    dispatch(uiActions.closeModal());
  };

  const handleAddSticker = (text, color) => {
    // TODO: Change with actions "openModal" or "closeModal"
    // dispatch(uiActions.toggleModal());
    dispatch(
      addSticker({
        id,
        text,
        color,
      })
    );
    dispatch(uiActions.closeModal());
  };

  if (showModal) {
    if (typeModal === "add") {
      return (
        <Modal
          key={id}
          title="Add new Sticker"
          typeButton="Create"
          onSave={handleAddSticker}
          id={id}
        />
      );
    }

    if (typeModal === "edit") {
      return (
        <Modal
          title="Modify Sticker"
          typeButton="Modify"
          onSave={handleModifySticker}
          key={stickerToEdit.id}
          id={stickerToEdit.id}
          text={stickerToEdit.text}
          color={stickerToEdit.color}
        />
      );
    }
  }
};

export default SelectedModal;
