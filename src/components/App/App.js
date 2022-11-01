import url from "../../constants";
import TODO from "../TODO/TODO";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <TODO url={url} />
    </div>
  );
};

export default App;
