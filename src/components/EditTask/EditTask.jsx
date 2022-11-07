import { useState } from "react";
import cancelImg from "images/cancel.svg";
import doneImg from "images/done.svg";
import "./style.scss";

const EditTaskButton = ({ elementId, updateTask, cancelEdit, elementText }) => {
  const [textEdit, setTextEdit] = useState(elementText);
  const [textEditError, setTextEditError] = useState("");

  const handleChange = (event) => {
    setTextEdit(event.target.value);
  };

  const updateEditTask = () => {
    if (textEdit.trim() === "") {
      setTextEditError("Поле не может быть пустым");
      return;
    } else {
      updateTask(elementId, textEdit);
      setTextEdit("");
    }
  };

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
            textEditError ? "edit-form__input__error" : "edit-form__input"
          }
        />
        <div>
          <button className="update-task__button" onClick={updateEditTask}>
            <img src={doneImg} alt="" />
          </button>
          <button onClick={cancelEdit} className="update-task__button">
            <img src={cancelImg} alt="" />
          </button>
        </div>
      </div>
      {textEditError && (
        <div className="update-task__text-error">{textEditError}</div>
      )}
    </div>
  );
};

export default EditTaskButton;
