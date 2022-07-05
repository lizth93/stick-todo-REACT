import Button from "./Button.styled";
import IconTrash from "./IconTrash";
import StickerOnTrash from "./StickerOnTrash.styled";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { modalActions } from "../store/index";

import { useDispatch } from "react-redux";

const NavigationHeader = (props) => {
  const dispatch = useDispatch();

  const handleClickAddNew = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <nav className={props.className}>
      <ul className="navigation__list">
        <li className="navigation__item navigation__create-new">
          <Route>
            <Link
              className="main-nav-link"
              to="/modal"
              onClick={handleClickAddNew}
            >
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
            <IconTrash />
          </Link>
          <div className="trash">
            <ul className="trash__list">
              <StickerOnTrash></StickerOnTrash>
            </ul>
            <Button className="btn-trash btn-restore-all -hidden">
              Restore All
            </Button>
            <Button className="btn-trash btn-delete-all -hidden">
              Delete All
            </Button>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationHeader;
