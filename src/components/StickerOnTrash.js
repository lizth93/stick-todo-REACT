import ButtonDelete from "./ButtonDelete";
import { stickerActions } from "../store/stickerSlice";
import { useDispatch } from "react-redux";

const StickerOnTrash = (props) => {
  const dispatch = useDispatch();

  const handleRestoreSticker = () => {
    console.log("click on restore");
    dispatch(stickerActions.restoreSticker(props.id));
  };

  return (
    <div
      className={props.className}
      style={{ backgroundColor: props.color }}
      draggable="true"
      id={props.id}
    >
      <div className="header-stick">
        <div>
          <button
            className="btn-box icon-return"
            draggable="false"
            onClick={handleRestoreSticker}
          >
            <svg
              className="icon-stick icon-stick-return"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19.885 5.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.074.1 2.992 2.993 2.664 7.684-.188 10.319l3.314 3.5c4.716-4.226 5.257-12.223.267-17.213z" />
            </svg>
          </button>
        </div>
        <div>
          <ButtonDelete />
        </div>
      </div>
      <span className="text-content">{props.text}</span>
    </div>
  );
};

export default StickerOnTrash;
