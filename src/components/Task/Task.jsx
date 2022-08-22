import axios from "axios";
import React from "react";
import { url } from "../../constants";
import { useState } from "react";
import DefaultTask from "../DefaultTask/DefaultTask";
import UpdateTaskButton from "../UpdateTaskButton/UpdateTaskButton";
import "./Task.scss";

const Task = ({ element, completeTask, deleteTask, todos, setTodos }) => {
  const [taskEdit, setTaskEdit] = useState(null);
  const [textEdit, setEditText] = useState("");

  const updateTask = async (_id) => {
    if (textEdit) {
      let res = await axios.patch(`${url}/tasks/${_id}`, {
        text: textEdit,
      });
      const updatedTodos = [...todos].map((element) => {
        if (element._id === _id) {
          element.text = res.data.text;
        }
        return element;
      });
      setTodos(updatedTodos);
      setTaskEdit(null);
      setEditText("");
    }
  };

  const cancelEdit = () => {
    setTaskEdit(null);
  };

  return (
    <div className="task">
      {taskEdit === element._id ? (
        <UpdateTaskButton
          element={element}
          updateTask={updateTask}
          cancelEdit={cancelEdit}
          setEditText={setEditText}
          textEdit={textEdit}
        />
      ) : (
        <DefaultTask
          completeTask={completeTask}
          deleteTask={deleteTask}
          setTaskEdit={setTaskEdit}
          element={element}
        />
      )}
    </div>
  );
};

export default Task;
