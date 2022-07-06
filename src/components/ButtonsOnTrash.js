import { Fragment } from "react";
import Button from "./Button.styled";

const ButtonsOnTrash = () => {
  return (
    <Fragment>
      <Button className="btn-trash btn-restore-all">Restore All</Button>
      <Button className="btn-trash btn-delete-all">Delete All</Button>
    </Fragment>
  );
};

export default ButtonsOnTrash;
