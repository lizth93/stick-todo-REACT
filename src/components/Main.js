import Footer from "./Footer.styled";
import Modal from "./Modal.styled";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = (props) => {
  const isShowModal = useSelector((state) => state.modal.showModal);

  return (
    <main className={props.className}>
      <div className="main-components">
        <div>
          <section className="container" id="container"></section>
          <section className="section-popup">
            {isShowModal && (
              <Route path="/modal" exact>
                <Modal title="Add new Sticker" typeButton="Create" id="1" />
              </Route>
            )}
          </section>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Main;
