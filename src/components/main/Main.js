import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store";

//own
import Footer from "../footer/Footer.styled";
import Sticker from "../stickers/Stiker.styled";
import { stickerActions } from "../../store/stickerSlice";
import dragAndDrop from "../../store/dragAndDrop";
import SelectedModal from "../modal/typeModal";

const Main = (props) => {
  const dispatch = useDispatch();
  const { stickers } = useSelector((state) => ({
    stickers: state.stickerItems.stickers,
  }));

  const handleEditSticker = (sticker) => {
    dispatch(stickerActions.setStickerToEdit(sticker));
    dispatch(uiActions.setTypeModal("edit"));
    dispatch(uiActions.toggleModal());
  };

  let stickerStartDragged;

  const handleDragStart = (e) => {
    stickerStartDragged = e.target;
    stickerStartDragged.style.opacity = "0.4";

    dispatch(
      stickerActions.setStickerMove({
        id: stickerStartDragged.id,
        text: stickerStartDragged.dataset.text,
        color: stickerStartDragged.dataset.color,
      })
    );
  };

  const handleDragOver = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
  };

  const handleDragEnter = (e) => {
    e.target.classList.add("over");
  };
  const handleDragLeave = (e) => {
    e.target.classList.remove("over");
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
    // stickers.forEach(function (x) {
    //   x.classList.remove("over");
    //   console.log(stickers, "sticker");
    // });
  };

  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let stickerEnd = e.target;

    dispatch(
      stickerActions.setStickerEnd({
        id: stickerEnd.id,
        text: stickerEnd.dataset.text,
        color: stickerEnd.dataset.color,
      })
    );

    dispatch(dragAndDrop());
  };

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
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragEnd={handleDragEnd}
                onDrop={handleDrop}
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
          <section className="section-popup">
            <SelectedModal />
          </section>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Main;
