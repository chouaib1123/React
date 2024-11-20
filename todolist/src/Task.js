const Task = (props) => {
  const onDeleteHandler = () => {
    props.onDeleteDone(props.item.id);
  };
  const onApproved = () => {
    props.onApproved(props.item.id);
  };
  const onEditDone = () => {
    props.onEditDone(props.item.id);
  };
  return (
    <div>
      <p className={props.item.Approved ? "green" : ""}>{props.item.text}</p>
      <button onClick={onEditDone}>Edit</button>
      <button onClick={onApproved}>Finished</button>
      <button onClick={onDeleteHandler}>Delete</button>
    </div>
  );
};

export default Task;
