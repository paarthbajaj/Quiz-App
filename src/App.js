import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { QuizQuestion } from "./components/QuizQuestion";
import { Result } from "./components/Result";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/questions" element={<QuizQuestion />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
