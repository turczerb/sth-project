import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Students from "./components/Students";

function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/students" exact component={Students} />
      </Routes>
    </div>
  );
}

export default App;
