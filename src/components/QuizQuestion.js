import { Link } from "react-router-dom";

export const QuizQuestion = () => {
  return (
    <div className="quiz-question-page">
      <header className="txt-bold txt-3 txt-center pt-1">
        Decode the code
      </header>
      <div className="question-card">
        <div className="question-card-header flex-row">
          <span className="grow-1">
            <span>Question:</span>
            <span className="txt-spacing txt-bold pl-5">1/5</span>
          </span>
          <span>
            <span>Score:</span>
            <span className="txt-bold pl-5">0</span>
          </span>
        </div>
        <div className="question-text txt-bold txt-center">
          Is javascript a statically typed or a dynamically typed language?
        </div>
        <div className="options-list txt-center">
          <ul>
            <li className="cursor-pointer">statically typed</li>
            <li className="cursor-pointer">dynamically typed</li>
            <li className="cursor-pointer">none</li>
          </ul>
        </div>
        <div className="txt-right">
          <Link to="/result">
            <button className="btn continue-btn">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
