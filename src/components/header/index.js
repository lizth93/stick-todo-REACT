//own
import NavigationHeader from "./NavigationHeader.styled";
import Logo from "../logo/Logo.styled";

const Header = (props) => {
  return (
    <header className={props.className}>
      <div className="header">
        <Logo />
        <NavigationHeader />
      </div>
    </header>
  );
};
export default Header;
