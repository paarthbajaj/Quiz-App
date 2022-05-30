import { useState } from "react";
import { useQuiz } from "../context/QuizContext";

export const QuizQuestion = () => {
  const { quizDispatch, quizState, currentQuestion, navigate } = useQuiz();
  const [boolOption, setBoolOption] = useState("");
  const addSelectedOptionClass = (selectedOption) => {
    setBoolOption(selectedOption);
  };
  return (
    <div className="quiz-question-page">
      <header className="txt-bold txt-3 txt-center pt-1">
        {quizState.selectedQuiz}
      </header>
      <div className="question-card">
        <div className="question-card-header flex-row">
          <span className="grow-1">
            <span>Question:</span>
            <span className="txt-spacing txt-bold pl-5">
              {quizState.counter + 1}/5
            </span>
          </span>
          <span>
            <span>Score:</span>
            <span className="txt-bold pl-5">10 each</span>
          </span>
        </div>
        <div className="question-text txt-bold txt-center">
          {currentQuestion?.question}
        </div>
        <div className="options-list txt-center">
          <ul>
            {currentQuestion?.options.map((option) => (
              <li
                className={`options-list-item cursor-pointer ${
                  boolOption == option.value ? "selected-options-list" : ""
                }`}
                key={option.code}
                onClick={() => {
                  addSelectedOptionClass(option.value);
                  quizDispatch({ type: "SELECT_OPTION", payload: option });
                }}
              >
                {option.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="txt-right">
          <button
            className="btn continue-btn"
            onClick={() => {
              quizState.counter < quizState.listOfQuestions.length - 1
                ? quizDispatch({ type: "INCREASE_COUNTER" })
                : navigate("/result");

              currentQuestion.answer.code ===
              currentQuestion.selectedAnswer.code
                ? quizDispatch({ type: "INCREASE_MARKS" })
                : quizDispatch({ type: "DECREASE_MARKS" });
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
