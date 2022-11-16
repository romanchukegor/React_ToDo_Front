import { Routes, Route } from "react-router-dom";
import Todo from "components/Todo/Todo";
import "./style.scss";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default App;
