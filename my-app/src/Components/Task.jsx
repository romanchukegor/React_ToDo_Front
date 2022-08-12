import React from "react";
import editImg from "../images/edit.svg";
import deleteImg from "../images/delete.svg";
import cancelImg from "../images/cancel.svg";
import doneImg from "../images/done.svg";
import axios from "axios";
import { useState } from "react";

const Task = ({ element, deleteTask, toggleTask, todos, setTodos }) => {
  const [taskEdit, setTaskEdit] = useState(null);
  const [textEdit, setEditText] = useState("");

  const cancelEdit = () => {
    setTaskEdit(null);
  };

  const updateTask = (_id) => {
    if (textEdit) {
      const url = `http://localhost:8000/tasks/${_id}`;
      axios
        .patch(url, {
          text: textEdit,
        })
        .then((resp) => {
          const updatedTodos = [...todos].map((element) => {
            if (element._id === _id) {
              element.text = resp.data.text;
            }
            return element;
          });
          setTodos(updatedTodos);
          setTaskEdit(null);
          setEditText("");
        });
    }
  };

  return (
    <div className="task">
      {taskEdit === element._id ? (
        <div className="update-task">
          <div>
            <input
              type="text"
              onChange={(event) => setEditText(event.target.value)}
              value={textEdit}
            />
          </div>
          <div className="update-task-buttons">
            <div onClick={() => updateTask(element._id)}>
              <img src={doneImg} alt="" />
            </div>
            <div onClick={() => cancelEdit()}>
              <img src={cancelImg} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="default-task">
          <div className="default-text">
            <div>
              <input
                type="checkbox"
                onClick={() => toggleTask(element._id)}
                className="check"
              />
            </div>
            <div className={element.isCheck ? "true-style" : "false-style"}>
              {element.text}
            </div>
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
  );
};

export default Task;
