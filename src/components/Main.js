import Footer from "./Footer.styled";
import Modal from "./Modal.styled";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Sticker from "./Stiker.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/index";

const Main = (props) => {
  let isShowModal = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch();
  const [stickers, setStickers] = useState([]);

  const handleAddSticker = (text, color) => {
    setStickers((prevStickers) => {
      return [
        ...prevStickers,
        { text: text, color: color, id: Math.random().toString() },
      ];
    });

    dispatch(modalActions.toggleModal());
  };

  return (
    <main className={props.className}>
      <div className="main-components">
        <div>
          <section className="container" id="container">
            {stickers.map((sticker) => (
              <Sticker
                key={sticker.id}
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
