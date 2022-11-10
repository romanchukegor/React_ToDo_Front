import { useState, useEffect } from "react";
import TaskForm from "components/TaskForm/TaskForm";
import DeleteAllButton from "components/DeleteAllButton/DeleteAllButton";
import EditTask from "components/EditTask/EditTask";
import DefaultTask from "components/DefaultTask/DefaultTask";
import Error from "components/Error/Error";
import {
  getAllTasksService,
  addTaskService,
  updateTaskService,
  deleteTaskService,
  deleteAllTasksService,
  completeTaskService,
} from "service/taskService";
import "./style.scss";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [taskEditId, setTaskEditId] = useState(null);
  const [hasError, setHasError] = useState({
    error: false,
    errorText: "",
  });

  const getAllTasks = async () => {
    try {
      const res = await getAllTasksService();
      setTodos(res.data.allTasks);
    } catch (err) {
      setHasError({
        error: true,
        errorText: "Не удалось получить задачи",
      });
    }
  };

  const addTask = async (textInput) => {
    try {
      const res = await addTaskService(textInput);
      setTodos([...todos, res.data]);
      return res.data;
    } catch (err) {
      setHasError({
        error: true,
        errorText: "Не удалось добавить задачу",
      });
    }
  };

  const updateTask = async (_id, text) => {
    try {
      const res = await updateTaskService(_id, text);
      const updatedTodos = [...todos].map((task) => {
        if (task._id === res.data._id) {
          task.text = res.data.text;
        }
        return task;
      });
      setTodos(updatedTodos);
      setTaskEditId(null);
      return res.data;
    } catch (err) {
      setHasError({
        error: true,
        errorText: "Не удалось обновить задачу",
      });
    }
  };

  const deleteTask = async (_id) => {
    try {
      const res = await deleteTaskService(_id);
      if (res.data.deletedCount !== 1) {
        setHasError({
          error: true,
          errorText: "не удалось верно удалить задачу"
        })
        return;
      }  
      setTodos([...todos.filter((elem) => elem._id !== _id)]);
    } catch (err) {
      setHasError({
        error: true,
        errorText: "Не удалось удалить задачу",
      });
    }
  };

  const deleteAllTasks = async () => {
    try {
      const res = await deleteAllTasksService();
      if (res.data.deletedCount === todos.length) {
        setTodos([]);
      }
    } catch (err) {
      setHasError({
        error: true,
        errorText: "Не удалось удалить все задачи",
      });
    }
  };

  const completeTask = async (_id, isCheck) => {
    try {
      const res = await completeTaskService(_id, isCheck);
      setTodos([
        ...todos.map((elem) =>
          elem._id === res.data._id
            ? { ...elem, isCheck: res.data.isCheck }
            : { ...elem }
        ),
      ]);
    } catch (err) {
      setHasError({
        error: true,
        errorText: "Не удалось отметить задачу",
      });
      return err;
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div>
      <div className="tasks">
        <TaskForm addTask={addTask} />
        {todos.map((task) => {
          return (
            <div className="tasks__task" key={task._id}>
              {taskEditId === task._id ? (
                <EditTask
                  taskId={task._id}
                  taskText={task.text}
                  updateTask={updateTask}
                  cancelEdit={() => setTaskEditId(null)}
                  key={task._id}
                />
              ) : (
                <DefaultTask
                  completeTask={completeTask}
                  changeTask={(_id) => setTaskEditId(_id)}
                  deleteTask={deleteTask}
                  task={task}
                  key={task._id}
                />
              )}
            </div>
          );
        })}
        <DeleteAllButton deleteAllTasks={deleteAllTasks} />
      </div>
      {hasError.error && <Error errorText={hasError.errorText} />}
    </div>
  );
};

export default Todo;
