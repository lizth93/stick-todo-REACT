import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header.styled";
import Main from "./components/Main.styled";
import { sendRequest } from "./store/stickerActions";

// let isInitial = true;

function App() {
  const stickers = useSelector((state) => state.stickerItems);
  // const dispatch = useDispatch();

  useEffect(() => {
    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }

    if (stickers.changed) {
      sendRequest(stickers);
    }
  }, [stickers]);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
