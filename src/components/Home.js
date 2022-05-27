import { Link } from "react-router-dom";
import "./Quiz.css";
export const Home = () => {
  const tempArr = [1, 2, 3, 4, 5];
  return (
    <div>
      <header className="quiz-header txt-bold txt-3 txt-center pt-1">
        Knowledge, if it does not determine action, is dead to us
      </header>
      <div className="quiz-cards-list flex-row-center-center flex-wrap">
        {tempArr.map(() => (
          <div className="quiz-card">
            <Link to="/questions">
              <img src="https://play-lh.googleusercontent.com/YkkesWsz5tvUjAowVvdQchxOrhGrDsXjdQ7RQCeyS4xeIlHNVo2LuJEHanTTiUla8Ck" />
              <div className="quiz-card-info">
                <div className="quiz-card-title txt-bold">Decode the code</div>
                <div className="quiz-card-text">
                  Take this quiz to test yourself
                </div>
                <div className="quiz-card-questions">5 Questions</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
