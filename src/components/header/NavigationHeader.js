import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//own
import IconTrash from "./icons/IconTrash";
import IconTrashEmpty from "./icons/IconTrashEmpty";
import EmptyIndicatorTrash from "./icons/EmptyIndicatorTrash";
import StickerOnTrash from "../stickers/StickerOnTrash.styled";
import ButtonsOnTrash from "../button/ButtonsOnTrash";
import { uiActions } from "../../store";

const NavigationHeader = (props) => {
  const stickersOnTrash = useSelector(
    (state) => state.stickerItems.trashStickers
  );
  const dispatch = useDispatch();

  const handleClickAddNew = () => {
    dispatch(uiActions.toggleModal());
    dispatch(uiActions.setTypeModal("add"));
  };

  return (
    <nav className={props.className}>
      <ul className="navigation__list">
        <li className="navigation__item navigation__create-new">
          <Route>
            <Link className="main-nav-link" to="/" onClick={handleClickAddNew}>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="btn-icon-new"
              >
                <path d="M23 17h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2zm-7 5v2h-15v-24h10.189c3.163 0 9.811 7.223 9.811 9.614v2.386h-2v-1.543c0-4.107-6-2.457-6-2.457s1.518-6-2.638-6h-7.362v20h13z" />
              </svg>
              Add New
            </Link>
          </Route>
        </li>
        <li className="navigation__item">
          <Link className="main-nav-link nav__btn--trash" to="/">
            {stickersOnTrash.length === 0 ? <IconTrashEmpty /> : <IconTrash />}
          </Link>
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
        </li>
      </ul>
    </nav>
  );
};
export default NavigationHeader;
