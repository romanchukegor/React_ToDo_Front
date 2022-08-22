import deleteImg from "../../images/delete.svg";
import editImg from "../../images/edit.svg";
import "./DefaultTask.scss";

const DefaultTask = ({ completeTask, setTaskEdit, deleteTask, element }) => {
  return (
    <div className="default-task">
      <div className="default-task__text">
        <div>
          <input
            type="checkbox"
            onClick={() => completeTask(element._id, element.isCheck)}
            className="default-task__checkbox"
            checked={element.isCheck}
          />
        </div>
        <div
          className={
            element.isCheck ? "default-task__active" : "default-task__inactive"
          }
        >
          {element.text}
        </div>
      </div>
      <div className="default-task__task-buttons">
        <div onClick={() => setTaskEdit(element._id)}>
          <img src={editImg} alt="" className="default-task__image" />
        </div>
        <div onClick={() => deleteTask(element._id)}>
          <img src={deleteImg} alt="" className="default-task__image" />
        </div>
      </div>
    </div>
  );
};

export default DefaultTask;
