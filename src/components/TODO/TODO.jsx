import { useEffect } from "react";
import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import DeleteAllButton from "../DeleteAllButton/DeleteAllButton";
import Task from "../Task/Task";
import "./TODO.scss";
import {
  getAllTasksReq,
  addTaskReq,
  updateTaskReq,
  deleteTaskReq,
  deleteAllTasksReq,
  completeTaskReq,
} from "../../service/taskService";

const TODO = () => {
  const [todos, setTodos] = useState([]);
  const [taskEdit, setTaskEdit] = useState(null);

  const getAllTasks = async () => {
    const res = await getAllTasksReq();
    let { allTasks } = res.data;
    setTodos(allTasks);
  };

  const addTask = async (textInput) => {
    const res = await addTaskReq(textInput);
    setTodos([...todos, res.data]);
  };

  const updateTask = async (_id, text) => {
    let res = await updateTaskReq(_id, text);
    const updatedTodos = [...todos].map((element) => {
      if (element._id === _id) {
        element.text = res.data.text;
      }
      return element;
    });
    setTodos(updatedTodos);
    setTaskEdit(null);
  };

  const deleteTask = async (_id) => {
    await deleteTaskReq(_id);
    setTodos([...todos.filter((elem) => elem._id !== _id)]);
  };

  const deleteAllTasks = async () => {
    await deleteAllTasksReq();
    setTodos([]);
  };

  const completeTask = async (_id, isCheck) => {
    await completeTaskReq(_id, isCheck);

    setTodos([
      ...todos.map((elem) =>
        elem._id === _id ? { ...elem, isCheck: !elem.isCheck } : { ...elem }
      ),
    ]);
  };

  const cancelEdit = () => {
    setTaskEdit(null);
  };

  const setTask = (_id) => {
    setTaskEdit(_id);
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="content">
      <TaskForm addTask={addTask} />
      {todos.map((element) => {
        return (
          <Task
            element={element}
            cancelEdit={cancelEdit}
            setTask={setTask}
            updateTask={updateTask}
            taskEdit={taskEdit}
            key={element.id}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        );
      })}
      <DeleteAllButton deleteAllTasks={deleteAllTasks} />
    </div>
  );
};

export default TODO;
