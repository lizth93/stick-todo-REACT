import { useSelector } from "react-redux";
//own
import IconTrash from "./icons/IconTrash";
import IconTrashEmpty from "./icons/IconTrashEmpty";
import EmptyIndicatorTrash from "./icons/EmptyIndicatorTrash";
import StickerOnTrash from "../stickers/StickerOnTrash.styled";
import ButtonsOnTrash from "../button/ButtonsOnTrash";

const TrashDropdown = (props) => {
  const stickersOnTrash = useSelector(
    (state) => state.stickerItems.trashStickers
  );
  return (
    <div className={props.className}>
      <button className="main-nav-link nav__btn--trash">
        {stickersOnTrash.length === 0 ? <IconTrashEmpty /> : <IconTrash />}
      </button>
      <div className="trash">
        <ul className="trash__list">
          {stickersOnTrash.map((sticker) => (
            <StickerOnTrash
              key={sticker.id}
              id={sticker.id}
              text={sticker.text}
              color={sticker.color}
            />
          ))}
        </ul>
        {stickersOnTrash.length === 0 ? (
          <EmptyIndicatorTrash />
        ) : (
          <ButtonsOnTrash />
        )}
      </div>
    </div>
  );
};

export default TrashDropdown;
