const IconTrash = () => {
  return (
    <div className="trash-items">
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fillRule="evenodd"
        clipRule="evenodd"
        className="btn-icon-trash trash-stroke"
      >
        <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm-14-19v7h14v-7h-14zm9-3h-4v1h4v-1z" />
      </svg>
      <span> Trash</span>
    </div>
  );
};
export default IconTrash;
