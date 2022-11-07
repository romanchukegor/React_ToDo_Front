import "./DeleteAllButton.scss";

const DeleteAllButton = ({ deleteAllTasks }) => {
  return (
    <div className="delete-all" onClick={deleteAllTasks}>
      <button className="delete-all__button">DELETE ALL</button>
    </div>
  );
};

export default DeleteAllButton;
