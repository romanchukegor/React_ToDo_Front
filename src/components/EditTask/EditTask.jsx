import { useState } from "react";
import "./style.scss";
import cancelImg from "../../images/cancel.svg";
import doneImg from "../../images/done.svg";

const EditTaskButton = ({ elementId, updateTask, cancelEdit, elementText }) => {
  const [textEdit, setTextEdit] = useState(elementText);
  const [textEditError, setTextEditError] = useState("");

  const handleChange = (event) => {
    setTextEdit(event.currentTarget.value);
    if (event.currentTarget.value === "") {
      setTextEditError("Поле не может быть пустым");
    } else {
      setTextEditError("");
    }
  };

  const handleSumbit = () => {
    if (textEdit.trim() === "") {
      return;
    }
    updateTask(elementId, textEdit);
    setTextEdit("");
  };

  return (
    <div className="update-task">
      <form onSubmit={handleSumbit}>
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
          <button>
            <img src={doneImg} alt="" />
          </button>
          <button onClick={cancelEdit}>
            <img src={cancelImg} alt="" />
          </button>
        </div>
      </form>
      {textEditError && (
        <div style={{ color: "red", fontSize: "16px" }}>{textEditError}</div>
      )}
    </div>
  );
};

export default EditTaskButton;
