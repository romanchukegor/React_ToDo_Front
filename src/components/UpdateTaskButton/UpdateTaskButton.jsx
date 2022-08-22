import cancelImg from "../../images/cancel.svg";
import doneImg from "../../images/done.svg";
import "./UpdateTaskButton.scss"

const UpdateTaskButton = ({updateTask, cancelEdit, setEditText, textEdit, element}) => {
  return (
    <div className="update-task">
      <div>
        <input
          type="text"
          onChange={(event) => setEditText(event.target.value)}
          value={textEdit}
        />
      </div>
      <div className="update-task__buttons">
        <div onClick={() => updateTask(element._id)}>
          <img src={doneImg} alt="" />
        </div>
        <div onClick={() => cancelEdit()}>
          <img src={cancelImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UpdateTaskButton;
