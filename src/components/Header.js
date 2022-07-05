import NavigationHeader from "./NavigationHeader.styled";
import Logo from "./Logo.styled";

const Header = (props) => {
  // const stateModalPopup = (stateModal) => {
  //   props.stateModalPopup(stateModal);
  //   console.log(stateModal, "from header");
  // };

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
