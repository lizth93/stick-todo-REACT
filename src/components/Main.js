import Footer from "./Footer.styled";
import ModuleAddNew from "./ModuleAddNew.styled";

const Main = (props) => {
  return (
    <main className={props.className}>
      <div className="main-components">
        <div>
          <section className="container" id="container"></section>
          <section className="section-popup">
            <ModuleAddNew />
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
