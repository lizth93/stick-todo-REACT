import { useDispatch } from "react-redux";
import { uiActions } from "../../store";
import { useSelector } from "react-redux";

//own
import Footer from "../footer/Footer.styled";
import Modal from "../modal/Modal.styled";
import Sticker from "../stickers/Stiker.styled";
import { stickerActions } from "../../store/stickerSlice";
import modifySticker from "../../store/modifySticker";
import addSticker from "../../store/addSticker";

const Main = (props) => {
  const dispatch = useDispatch();
  const { stickers, stickerToEdit, typeModal, showModal } = useSelector(
    (state) => ({
      stickers: state.stickerItems.stickers,
      stickerToEdit: state.stickerItems.stickerToEdit,
      typeModal: state.ui.typeModal,
      showModal: state.ui.showModal,
    })
  );

  // TODO: delete this and execute it only when is needed
  const id = Math.random().toString();

  const handleModifySticker = (text, color) => {
    dispatch(
      modifySticker({
        id: stickerToEdit.id,
        color,
        text,
      })
    );
    dispatch(uiActions.toggleModal());
  };

  const handleAddSticker = (text, color) => {
    dispatch(uiActions.toggleModal());
    dispatch(
      addSticker({
        id,
        text,
        color,
      })
    );
  };

  const handleEditSticker = (sticker) => {
    dispatch(stickerActions.setStickerToEdit(sticker));
    dispatch(uiActions.setTypeModal("edit"));
    dispatch(uiActions.toggleModal());
  };

  let modal = null;

  if (showModal) {
    if (typeModal === "add") {
      modal = (
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
      modal = (
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

  return (
    <main className={props.className}>
      <div className="main-components">
        <div>
          <section className="container" id="container">
            {stickers.map((sticker) => (
              <Sticker
                key={sticker.id}
                id={sticker.id}
                text={sticker.text}
                color={sticker.color}
                onEditSticker={() => {
                  handleEditSticker({
                    id: sticker.id,
                    text: sticker.text,
                    color: sticker.color,
                  });
                }}
              />
            ))}
          </section>
          <section className="section-popup">{modal}</section>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Main;
