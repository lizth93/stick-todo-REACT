// Own
import Header from "../components/Header.styled";
import Main from "../components/Main.styled";
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
