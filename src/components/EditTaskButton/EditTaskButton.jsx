import cancelImg from "../../images/cancel.svg";
import doneImg from "../../images/done.svg";
import { useState } from "react";
import "./EditTaskButton.scss";

const EditTaskButton = ({ elementId, updateTask, cancelEdit }) => {
  const [textEdit, setTextEdit] = useState("");

  const handleChange = (event) => {
    setTextEdit(event.currentTarget.value);
  };

  const addNewEditTask = () => {
    if (textEdit.trim() === "") {
      console.log("Error");
      return;
    }
    updateTask(elementId, textEdit);
  };

  const handleSumbit = () => {
    updateTask(elementId, textEdit);
    setTextEdit("");
  };

  return (
    <div className="update-task">
      <form onSubmit={handleSumbit}>
        <input type="text" onChange={handleChange} value={textEdit} />
      </form>
      <div className="update-task__buttons">
        <div>
          <button onClick={addNewEditTask}>
            <img src={doneImg} alt="" />
          </button>
        </div>
        <div >
          <button onClick={cancelEdit}>
            <img src={cancelImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskButton;
