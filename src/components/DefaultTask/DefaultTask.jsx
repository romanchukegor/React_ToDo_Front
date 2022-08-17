import { useState } from "react";
import deleteImg from "../../images/delete.svg";
import editImg from "../../images/edit.svg";
import "./DefaultTask.scss";

const DefaultTask = ({ toggleTask, setTaskEdit, deleteTask, element }) => {
  return (
    <div className="default-task">
      <div className="default-text">
        <div>
          <input
            type="checkbox"
            onClick={() => toggleTask(element._id, element.isCheck)}
            className="check"
            checked={element.isCheck}
          />
        </div>
        <div className={element.isCheck ? "true-style" : "false-style"}>
          {element.text}
        </div>
      </div>
      <div className="task-buttons">
        <div onClick={() => setTaskEdit(element._id)}>
          <img src={editImg} alt="" className="image" />
        </div>
        <div onClick={() => deleteTask(element._id)}>
          <img src={deleteImg} alt="" className="image" />
        </div>
      </div>
    </div>
  );
};

export default DefaultTask;
