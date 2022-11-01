import DefaultTask from "../DefaultTask/DefaultTask";
import EditTaskButton from "../EditTaskButton/EditTaskButton";
import "./Task.scss";

const Task = ({
  element,
  completeTask,
  deleteTask,
  textEdit,
  taskEdit,
  updateTask,
  setTask,
  cancelEdit
}) => {
  
  return (
    <div className="task">
      {taskEdit === element._id ? (
        <EditTaskButton
          elementId={element._id}
          updateTask={updateTask}
          cancelEdit={cancelEdit}
          textEdit={textEdit}
        />
      ) : (
        <DefaultTask
          completeTask={completeTask}
          setTask={setTask}
          deleteTask={deleteTask}
          elementId={element._id}
          elementIsCheck={element.isCheck}
          elementText={element.text}
        />
      )}
    </div>
  );
};

export default Task;
