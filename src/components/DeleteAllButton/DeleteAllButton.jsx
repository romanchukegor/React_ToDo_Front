import "./style.scss";

const DeleteAllButton = ({ deleteAllTasks }) => {
  return (
    <div className="delete-all">
      <button
        className="delete-all__button"
        onClick={deleteAllTasks}
        type="button"
      >
        DELETE ALL
      </button>
    </div>
  );
};

export default DeleteAllButton;
