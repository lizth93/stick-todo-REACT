import Footer from "./Footer.styled";

const Main = (props) => {
  return (
    <main className={props.className}>
      <div className="main-components">
        <div>
          <section className="container" id="container"></section>
          <section className="section-popup"></section>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Main;
