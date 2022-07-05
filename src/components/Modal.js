import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button.styled";
import { modalActions } from "../store/index";

const ModuleAddNew = (props) => {
  const dispatch = useDispatch();

  const handleShowModal = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <form className={props.className} id="modal">
      <div className="modal__content">
        <div className="modal-img-box" role="img"></div>
        <div className="modal__right">
          <Link
            to="/container"
            className="modal__close"
            onClick={handleShowModal}
          >
            &times;
          </Link>
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
                // value="#20c997"
              />
            </div>
          </div>
          <Button className="btn--form modal-button-element">
            {props.typeButton}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ModuleAddNew;
