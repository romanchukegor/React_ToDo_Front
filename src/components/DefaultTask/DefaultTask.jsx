import deleteImg from "images/delete.svg";
import editImg from "images/edit.svg";
import "./style.scss";

const DefaultTask = ({ completeTask, deleteTask, task, changeTask }) => {
  const handleChange = async () => {
    completeTask(task._id, !task.isCheck);
  };

  return (
    <div className="default-task">
      <div className="default-task__text">
        <div>
          <input
            type="checkbox"
            className="default-task__checkbox"
            checked={task.isCheck}
            onChange={handleChange}
          />
        </div>
        <div
          className={
            task.isCheck ? "default-task__active" : "default-task__inactive"
          }
        >
          {task.text}
        </div>
      </div>
      <div className="default-task__task-buttons">
        <button
          type="button"
          className="default-task__button"
          onClick={() => changeTask(task._id)}
        >
          <img src={editImg} alt="" className="default-task__image" />
        </button>
        <button
          type="button"
          className="default-task__button"
          onClick={() => deleteTask(task._id)}
        >
          <img src={deleteImg} alt="" className="default-task__image" />
        </button>
      </div>
    </div>
  );
};

export default DefaultTask;
