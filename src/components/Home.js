import { Link } from "react-router-dom";
import { QuizInfo } from "../backend/db/QuizInfo";
import { questions } from "../backend/db/questions";
import "./Quiz.css";
import { useQuiz } from "../context/QuizContext";

export const Home = () => {
  const { quizDispatch } = useQuiz();
  return (
    <div>
      <header className="quiz-header txt-bold txt-3 txt-center pt-1">
        Knowledge, if it does not determine action, is dead to us
      </header>
      <div className="quiz-cards-list flex-row-center-center flex-wrap">
        {QuizInfo.map((quiz) => (
          <div
            className="quiz-card"
            key={quiz._id}
            onClick={() => {
              quizDispatch({ type: "SET_SELECTED_QUIZ", payload: quiz.title });
              quizDispatch({
                type: "SET_QUESTIONS_LIST",
                payload: questions.filter(
                  (ques) => ques.category == quiz.category
                ),
              });
            }}
          >
            <Link to="/questions">
              <img src={quiz.image} />
              <div className="quiz-card-info">
                <div className="quiz-card-title txt-bold">{quiz.title}</div>
                <div className="quiz-card-text">
                  Take this quiz to test yourself
                </div>
                <div className="quiz-card-questions">
                  {quiz.numberOfQues} Questions
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
