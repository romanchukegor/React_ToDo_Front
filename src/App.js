import { url } from "./constants";
import TODO from "./components/TODO/TODO";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <TODO url={url} />
    </div>
  );
};

export default App;
