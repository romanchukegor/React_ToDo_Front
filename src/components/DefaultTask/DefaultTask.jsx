import deleteImg from "../../images/delete.svg";
import editImg from "../../images/edit.svg";
import "./DefaultTask.scss";

const DefaultTask = ({
  completeTask,
  deleteTask,
  elementId,
  elementIsCheck,
  elementText,
  setTask,
}) => {
  return (
    <div className="default-task">
      <div className="default-task__text">
        <div>
          <input
            type="checkbox"
            onClick={() => completeTask(elementId, elementIsCheck)}
            className="default-task__checkbox"
            checked={elementIsCheck}
          />
        </div>
        <div
          className={
            elementIsCheck ? "default-task__active" : "default-task__inactive"
          }
        >
          {elementText}
        </div>
      </div>
      <div className="default-task__task-buttons">
        <button onClick={() => setTask(elementId)}>
          <img src={editImg} alt="" className="default-task__image" />
        </button>
        <button onClick={() => deleteTask(elementId)}>
          <img src={deleteImg} alt="" className="default-task__image" />
        </button>
      </div>
    </div>
  );
};

export default DefaultTask;
