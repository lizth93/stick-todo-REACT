import { useSelector } from "react-redux/es/exports";
// Own
import Header from "../components/header/Header.styled";
import Main from "../components/main/Main.styled";
import useInitializeStickers from "./useInitializeStickers";
import useSaveStickers from "./useSaveStickers";
import Notification from "../components/notification/Notification";
import "./App.css";

function App() {
  const notification = useSelector((state) => state.ui.notification);
  useInitializeStickers();
  useSaveStickers();

  return (
    <div className="App">
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Header />
      <Main />
    </div>
  );
}

export default App;
