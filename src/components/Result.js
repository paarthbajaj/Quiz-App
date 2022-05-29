import { Link } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

export const Result = () => {
  const { quizDispatch, quizState } = useQuiz();
  return (
    <div className="quiz-question-page">
      <header className="txt-bold txt-3 txt-center pt-1">Result</header>
      <div className="final-score txt-center">
        <span className="txt-bold">Final Score:</span>
        <span className="txt-spacing txt-bold pl-5">{quizState.marks}/50</span>
      </div>
      {quizState.listOfQuestions?.map((quiz) => (
        <div className="result-card" key={quiz._id}>
          <div className="result-question-text txt-bold">{quiz.question}</div>
          <div className="options-list txt-center">
            <ul>
              {quiz.options.map((option) => (
                <li
                  className={`result-options-list-item ${
                    option.code == quiz.answer.code
                      ? "right-answer"
                      : option.code == quiz.selectedAnswer.code
                      ? "wrong-answer"
                      : ""
                  }`}
                  key={option.code}
                >
                  {option.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="result-page-footer-button txt-center">
        <Link to="/home">
          <button
            className="quiz-pri-btn"
            onClick={() => quizDispatch({ type: "SET_COUNTER", payload: 0 })}
          >
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};
