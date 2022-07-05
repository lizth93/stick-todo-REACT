const Button = (props) => {
  return (
    <div className={props.className}>
      <button
        className="btn"
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};
export default Button;
