import AddNewButton from "./AddNewButton.styled";
import TrashDropdown from "./TrashDropdown.styled";

const NavigationHeader = (props) => {
  return (
    <nav className={props.className}>
      <ul className="navigation__list">
        <li className="navigation__item navigation__create-new">
          <AddNewButton />
        </li>
        <li className="navigation__item">
          <TrashDropdown />
        </li>
      </ul>
    </nav>
  );
};
export default NavigationHeader;
