import { Link } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

export const RulesPopup = () => {
  const { quizDispatch, quizState } = useQuiz();
  return (
    <>
      {quizState.isPopupOpen && (
        <div className="rules-popup">
          <div className="rules-popup-content">
            <h1>Quiz Rules</h1>
            <ol>
              <li>There are 5 questions in total.</li>
              <li>Each question carries 10 marks.</li>
              <li>Negative marking of 5 marks if answered wrong.</li>
            </ol>
            <div className="txt-center">
              <Link to="/questions">
                <button
                  className="cursor-pointer quiz-pri-btn txt-bold"
                  onClick={() => quizDispatch({ type: "CLOSE_RULES_POPUP" })}
                >
                  Ok, Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
