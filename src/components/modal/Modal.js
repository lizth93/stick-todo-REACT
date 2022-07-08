import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

//own
import Button from "../button/Button.styled";
import { uiActions } from "../../store";

const ModuleAddNew = (props) => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(props.color || "#20c997");
  const [text, setText] = useState(props.text || "");
  let typeModal = useSelector((state) => state.ui.typeModal);

  const handleShowModal = () => {
    dispatch(uiActions.toggleModal());
  };

  const handleOnChangeColor = (ev) => {
    setColor(ev.target.value);
  };

  const handleOnChangeText = (ev) => {
    setText(ev.target.value);
  };

  const handleAddSticker = (ev) => {
    ev.preventDefault();
    props.onSave(text, color);
  };

  return (
    <div>
      <form className={props.className} id="modal" onSubmit={handleAddSticker}>
        <div className="modal__content">
          <div className="modal-img-box" role="img"></div>
          <div className="modal__right">
            <button className="modal__close" onClick={handleShowModal}>
              &times;
            </button>
            <h2 className="u-margin-bottom-small">{props.title}</h2>
            <div className="modal__flex">
              <label className="id-number">{props.id}</label>
              <div>
                <label htmlFor="create-text" className="create-text">
                  Input the text
                </label>
                <br />
                <textarea
                  name="create-text"
                  id="create-text"
                  placeholder="Type the content"
                  className="create-text-area u-margin-bottom-small"
                  onChange={handleOnChangeText}
                  value={text}
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="create-color" className="create-text">
                  Select color
                </label>
                <br />
                <input
                  type="color"
                  name="create-color"
                  id="create-color"
                  className="create-color"
                  value={color}
                  onChange={handleOnChangeColor}
                />
              </div>
            </div>
            <Button className="btn--form modal-button-element" type="submit">
              {props.typeButton}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModuleAddNew;
