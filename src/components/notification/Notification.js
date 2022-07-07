const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = "error";
  }
  if (props.status === "success") {
    specialClasses = "success";
  }

  const cssClasses = `notification ${specialClasses}`;

  return (
    <div className={props.className}>
      <section className={cssClasses}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </section>
    </div>
  );
};

export default Notification;
