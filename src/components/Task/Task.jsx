import React from "react";
import axios from "axios";
import { useState } from "react";
import DefaultTask from "../DefaultTask/DefaultTask";
import UpdateTaskButton from "../UpdateTaskButton/UpdateTaskButton";
import "./Task.scss";

const Task = ({ element, todos, setTodos, url }) => {
  const [taskEdit, setTaskEdit] = useState(null);
  const [textEdit, setEditText] = useState("");

  const cancelEdit = () => {
    setTaskEdit(null);
  };

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

  const deleteTask = async (_id) => {
    await axios.delete(`${url}/tasks/${_id}`);
    setTodos([...todos.filter((elem) => elem._id !== _id)]);
  };

  const toggleTask = async (_id, isCheck) => {
    let res = await axios.patch(`${url}/tasks/${_id}/is-check`, {
      isCheck: !isCheck,
    });

    setTodos([
      ...todos.map((elem) =>
        elem._id === _id ? { ...elem, isCheck: !elem.isCheck } : { ...elem }
      ),
    ]);
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
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          setTaskEdit={setTaskEdit}
          element={element}
        />
      )}
    </div>
  );
};

export default Task;
