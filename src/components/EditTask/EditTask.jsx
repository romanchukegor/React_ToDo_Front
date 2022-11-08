import { useState } from "react";
import cancelImg from "images/cancel.svg";
import doneImg from "images/done.svg";
import "./style.scss";

const EditTask = ({ elementId, updateTask, cancelEdit, elementText }) => {
  const [textEdit, setTextEdit] = useState(elementText);
  const [textEditError, setTextEditError] = useState("");

  const handleChange = (event) => {
    setTextEdit(event.target.value);
  };

  const updateEditTask = () => {
    try {
      if (textEdit.trim() === "") {
        setTextEditError("Поле не может быть пустым");
        return;
      }
      updateTask(elementId, textEdit);
      setTextEdit("");
    } catch (error) {
      setTextEditError("Ошибка изменения задачи");
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
            textEditError ? "update-task__input__error" : "update-task__input"
          }
        />
        <div className="update-task__buttons">
          <button
            className="update-task__buttons__button"
            onClick={updateEditTask}
          >
            <img src={doneImg} alt="" />
          </button>
          <button onClick={cancelEdit} className="update-task__buttons__button">
            <img src={cancelImg} alt="" />
          </button>
        </div>
      </div>
      {textEditError && <div className="text-error">{textEditError}</div>}
    </div>
  );
};

export default EditTask;
