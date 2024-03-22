import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login-page";
import QuizPage from "./components/quiz-page";
import ScorePage from "./components/score-page";
import QuizReviewPage from "./components/quiz-review";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/review" element={<QuizReviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
