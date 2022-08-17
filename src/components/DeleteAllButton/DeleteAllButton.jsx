import "./DeleteAllButton.scss";
import axios from "axios";

const DeleteAllButton = ({ setTodos, url }) => {
  const deleteAllTasks = async () => {
    await axios.delete(`${url}/tasks`);
    setTodos([]);
  };

  return (
    <div className="delete-all" onClick={() => deleteAllTasks()}>
      DELETE ALL
    </div>
  );
};

export default DeleteAllButton;
