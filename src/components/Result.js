import { Link } from "react-router-dom";

export const Result = () => {
  const tempAr = [1, 2, 3];
  return (
    <div className="quiz-question-page">
      <header className="txt-bold txt-3 txt-center pt-1">Result</header>
      <div className="final-score txt-center">
        <span className="txt-bold">Final Score:</span>
        <span className="txt-spacing txt-bold pl-5">10/50</span>
      </div>
      {tempAr.map(() => (
        <div className="result-card">
          <div className="result-question-text txt-bold">
            Is javascript a statically typed or a dynamically typed language?
          </div>
          <div className="options-list txt-center">
            <ul>
              <li
                style={{
                  backgroundColor: "var(--dull-pink)",
                  color: "var(--dark-red)",
                }}
              >
                statically typed
              </li>
              <li
                style={{
                  backgroundColor: "var(--light-green)",
                  color: "var(--dark-green)",
                }}
              >
                dynamically typed
              </li>
              {/*  remove inline styling when fetching actual data */}
              <li>none</li>
            </ul>
          </div>
        </div>
      ))}
      <div className="result-page-footer-button txt-center">
        <Link to="/home">
          <button className="quiz-pri-btn">Back to home</button>
        </Link>
      </div>
    </div>
  );
};
