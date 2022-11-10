import { useState } from "react";
import Error from "components/Error/Error";
import cancelImg from "images/cancel.svg";
import doneImg from "images/done.svg";
import "./style.scss";

const EditTask = ({ taskId, updateTask, cancelEdit, taskText }) => {
  const [textEdit, setTextEdit] = useState(taskText);
  const [errorText, setErrorText] = useState("");

  const handleChange = (event) => {
    setTextEdit(event.target.value);
  };

  const updateEditTask = async() => {
    if (textEdit.trim() === "") {
      setErrorText("Поле не может быть пустым");
      return;
    }
    const updatedTask = await updateTask(taskId, textEdit);
    if (updatedTask) {
      setTextEdit("");
    } 
  } 

  return (
    <div>
      <div className="update-task">
        <input
          name="input"
          type="text"
          onChange={handleChange}
          value={textEdit}
          placeholder="Enter something..."
          className={
            errorText ? "update-task__input__error" : "update-task__input"
          }
        />
        <div>
          <button
            className="update-task__button"
            onClick={updateEditTask}
            type="button"
          >
            <img src={doneImg} alt="" />
          </button>
          <button 
            onClick={cancelEdit} 
            className="update-task__button"
            type="button">
            <img src={cancelImg} alt="" />
          </button>
        </div>
      </div>
      {errorText && <Error errorText={errorText}/>}
    </div>
  );
};

export default EditTask;
