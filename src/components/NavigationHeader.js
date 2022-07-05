import ButtonNavigation from "./ButtonNavigation.styled";
import IconTrash from "./IconTrash";
import StickerOnTrash from "./StickerOnTrash";

const NavigationHeader = (props) => {
  return (
    <nav className={props.className}>
      <ul className="navigation__list">
        <li className="navigation__item navigation__create-new">
          <a className="main-nav-link" href="/popup">
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
          </a>
        </li>
        <li className="navigation__item">
          <a className="main-nav-link nav__btn--trash" href="/">
            <IconTrash />
          </a>
          <div className="trash">
            <ul className="trash__list">
              <StickerOnTrash></StickerOnTrash>
            </ul>
            <ButtonNavigation>Restore All</ButtonNavigation>
            <ButtonNavigation>Delete All</ButtonNavigation>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationHeader;
