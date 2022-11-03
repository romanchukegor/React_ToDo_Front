import { useState, useEffect } from "react";
import TaskForm from "components/TaskForm/TaskForm";
import DeleteAllButton from "components/DeleteAllButton/DeleteAllButton";
import EditTask from "components/EditTask/EditTask";
import DefaultTask from "components/DefaultTask/DefaultTask";
import Error from "components/errorComponent/Error";
import "./style.scss";
import {
  getAllTasksService,
  addTaskService,
  updateTaskService,
  deleteTaskService,
  deleteAllTasksService,
  completeTaskService,
} from "../../service/taskService";

const TODO = () => {
  const [todos, setTodos] = useState([]);
  const [taskEdit, setTaskEdit] = useState(null);
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
        ...hasError,
        error: true,
        errorText: "Не удалось получить задачи",
      });
    }
  };

  const addTask = async (textInput) => {
    try {
      const res = await addTaskService(textInput);
      setTodos([...todos, res.data]);
    } catch (err) {
      setHasError({
        ...hasError,
        error: true,
        errorText: "Не удалось добавить задачу",
      });
    }
  };

  const updateTask = async (_id, text) => {
    try {
      const res = await updateTaskService(_id, text);
      const updatedTodos = [...todos].map((element) => {
        if (element._id === res.data._id) {
          element.text = res.data.text;
        }
        return element;
      });
      setTodos(updatedTodos);
      setTaskEdit(null);
    } catch (err) {
      setHasError({
        ...hasError,
        error: true,
        errorText: "Не удалось обновить задачу",
      });
    }
  };

  const deleteTask = async (_id) => {
    try {
      const res = await deleteTaskService(_id);
      if (res.data.deletedCount === 1) {
        setTodos([...todos.filter((elem) => elem._id !== _id)]);
      }
    } catch (err) {
      setHasError({
        ...hasError,
        error: true,
        errorText: "Не удалось удалить задачу",
      });
    }
  };

  const deleteAllTasks = async () => {
    try {
      const res = await deleteAllTasksService();
      if (res.data.deletedCount === 1) {
        setTodos([]);
      }
    } catch (err) {
      setHasError({
        ...hasError,
        error: true,
        errorText: "Не удалось удалить все задачи",
      });
    }
  };

  const completeTask = async (_id, isCheck) => {
    try {
      const res = await completeTaskService(_id, isCheck);
      setTodos([...todos.map((elem) => elem._id === res.data._id
            ? { ...elem, isCheck: res.data.isCheck }
            : { ...elem }
        ),
      ]);
    } catch (err) {
      setHasError({
        ...hasError,
        error: true,
        errorText: "Не удалось отметить задачу",
      });
    }
  };

  const cancelEdit = () => {
    try {
      setTaskEdit(null);
    } catch (err) {
      setHasError({
        ...hasError,
        error: true,
        errorText: "Не удалось отменить редактирование задачи",
      });
    }
  };

  const changeTask = (_id) => {
    try {
      setTaskEdit(_id);
    } catch (err) {
      setHasError({
        ...hasError,
        error: true,
        errorText: "Не удалось изменить задачу",
      });
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div>
      {!hasError.error && (
        <div className="content">
          <TaskForm addTask={addTask} />
          {todos.map((element) => {
            return (
              <div className="task">
                {taskEdit === element._id ? (
                  <EditTask
                    elementId={element._id}
                    elementText={element.text}
                    updateTask={updateTask}
                    cancelEdit={cancelEdit}
                  />
                ) : (
                  <DefaultTask
                    completeTask={completeTask}
                    changeTask={changeTask}
                    deleteTask={deleteTask}
                    element={element}
                  />
                )}
              </div>
            );
          })}
          <DeleteAllButton deleteAllTasks={deleteAllTasks} />
        </div>
      )}
      {hasError.error && <Error errorText={hasError.errorText} />}
    </div>
  );
};

export default TODO;
