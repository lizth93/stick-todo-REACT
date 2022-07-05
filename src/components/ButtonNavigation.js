import { Fragment } from "react";

const ButtonNavigation = (props) => {
  return (
    <div className={props.className}>
      <button className="btn btn-trash btn-restore-all hidden">
        {props.children}
      </button>
    </div>
  );
};
export default ButtonNavigation;
