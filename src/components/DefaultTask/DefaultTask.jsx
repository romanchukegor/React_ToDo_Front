import { useState } from "react";
import deleteImg from "images/delete.svg";
import editImg from "images/edit.svg";
import "./style.scss";

const DefaultTask = ({ completeTask, deleteTask, element, changeTask }) => {
  const [isCheck, setIsCheck] = useState(false);

  const handleChange = () => {
    setIsCheck(!isCheck);
    completeTask(element._id, isCheck);
  };

  return (
    <div className="default-task">
      <div className="default-task__text">
        <div>
          <input
            type="checkbox"
            className="default-task__checkbox"
            checked={element.isCheck}
            onChange={handleChange}
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
        <button
          className="default-task__button"
          onClick={() => changeTask(element._id)}
        >
          <img src={editImg} alt="" className="default-task__image" />
        </button>
        <button
          className="default-task__button"
          onClick={() => deleteTask(element._id)}
        >
          <img src={deleteImg} alt="" className="default-task__image" />
        </button>
      </div>
    </div>
  );
};

export default DefaultTask;
