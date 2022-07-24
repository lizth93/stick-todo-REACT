import { useDispatch } from "react-redux";

//own
import { uiActions } from "../../store";
import IconAddNew from "./icons/IconAddNew";

const AddNewButton = (props) => {
  const dispatch = useDispatch();
  const handleClickAddNew = () => {
    dispatch(uiActions.openModal({ mode: "add" }));
  };

  return (
    <div className={props.className}>
      <button className="main-nav-link" onClick={handleClickAddNew}>
        <IconAddNew />
        Add New
      </button>
    </div>
  );
};

export default AddNewButton;
