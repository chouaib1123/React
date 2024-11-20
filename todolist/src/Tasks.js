import Task from "./Task";
const Tasks = ({ Data, setData, val }) => {
  const onDelete = (id) => {
    const newData = Data.filter((item) => item.id !== id);
    setData(newData);
  };
  const onApprove = (id) => {
    const newData = Data.map((item) => {
      return item.id === id ? { ...item, Approved: true } : item;
    });

    setData(newData);
  };
  const onEdit = (id) => {
    if (val !== "") {
      const newData = Data.map((item) => {
        return item.id === id ? { ...item, text: val } : item;
      });
      setData(newData);
    }
  };
  return (
    <div>
      {Data.map((item, index) => (
        <Task
          item={item}
          key={index}
          onDeleteDone={onDelete}
          onApproved={onApprove}
          onEditDone={onEdit}
        />
      ))}
    </div>
  );
};

export default Tasks;
