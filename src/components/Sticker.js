import ButtonDelete from "./ButtonDelete";

const Sticker = (props) => {
  const color = props.color;

  return (
    <div
      className={props.className}
      style={{ backgroundColor: color }}
      draggable="true"
      id={props.id}
    >
      <header className="header-stick">
        <div className="icon-edit">
          <button className="btn-box btn-box-edit" draggable="false">
            <svg
              className="icon-stick"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M18.308 0l-16.87 16.873-1.436 7.127 7.125-1.437 16.872-16.875-5.691-5.688zm-15.751 21.444l.723-3.585 12.239-12.241 2.861 2.862-12.239 12.241-3.584.723zm17.237-14.378l-2.861-2.862 1.377-1.377 2.861 2.861-1.377 1.378z" />
            </svg>
          </button>
        </div>
        <div className="icon-deleted">
          <ButtonDelete />
        </div>
      </header>
      <span className="text-content">{props.text}</span>
    </div>
  );
};
export default Sticker;
