// Own
import Header from "../components/header/Header.styled";
import Main from "../components/main/Main.styled";
import useInitializeStickers from "./useInitializeStickers";
import useSaveStickers from "./useSaveStickers";
import "./App.css";

function App() {
  useInitializeStickers();
  useSaveStickers();

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
