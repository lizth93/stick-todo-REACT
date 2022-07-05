import "./App.css";
import Header from "./components/Header.styled";
import Main from "./components/Main";

function App(props) {
  // const stateModal = props.stateModal;
  // console.log(stateModal, "from app");

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
