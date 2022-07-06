import Footer from "./Footer.styled";
import Modal from "./Modal.styled";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Sticker from "./Stiker.styled";

import { useDispatch } from "react-redux";

import { uiActions } from "../store/index";
import { stickerActions } from "../store/stickerSlice";

const Main = (props) => {
  const isShowModal = useSelector((state) => state.ui.showModal);
  const stickers = useSelector((state) => state.stickerItems.stickers);
  const dispatch = useDispatch();

  const id = Math.random().toString();

  const handleAddSticker = (text, color) => {
    dispatch(uiActions.toggleModal());
    dispatch(
      stickerActions.addSticker({
        text,
        color,
        id,
      })
    );
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
              />
            ))}
          </section>
          <section className="section-popup">
            {isShowModal && (
              <Route path="/modal" exact>
                <Modal
                  title="Add new Sticker"
                  typeButton="Create"
                  onAddSticker={handleAddSticker}
                  id={id}
                />
              </Route>
            )}
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
