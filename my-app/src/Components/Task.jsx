import React from "react";
import editImg from "../images/edit.svg";
import deleteImg from "../images/delete.svg";
import cancelImg from "../images/cancel.svg";
import doneImg from "../images/done.svg";
import { useState } from "react";

const Task = ({ element, deleteTask, toggleTask }) => {
  const [taskEdit, setTaskEdit] = useState(null);
  const [textEdit, setEditText] = useState("");

  const cancelEdit = () => {};

  return (
    <div className="task">
      <div className="text">
        <div>
          <input type="checkbox" onClick={() => toggleTask(element._id)} />
        </div>
        {taskEdit === element._id ? (
          <div>
            <input
              type="text"
              onChange={(event) => setEditText(event.target.value)}
              value={textEdit}
            />
            <div>
              <img src={doneImg} alt="" />
            </div>
            <div>
              <img src={cancelImg} alt="" />
            </div>
          </div>
        ) : (
          <div>
            <div className={element.isCheck ? "true-style" : "false-style"}>
              {element.text}
            </div>
            <div className="task-buttons">
              <div onClick={() => setTaskEdit(element._id)}>
                <img src={editImg} alt="" className="svg" />
              </div>
              <div onClick={() => deleteTask(element._id)}>
                <img src={deleteImg} alt="" className="svg" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
