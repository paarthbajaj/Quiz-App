import { QuizInfo } from "../backend/db/QuizInfo";
import { questions } from "../backend/db/questions";
import "./Quiz.css";
import { useQuiz } from "../context/QuizContext";
import { RulesPopup } from "./RulesPopup";

export const Home = () => {
  const { quizDispatch, quizState } = useQuiz();
  return (
    <div>
      <header className="quiz-header txt-bold txt-center pt-1">
        {/* <div>
        <i class="fas fa-sun"></i>
          <i className="fas fa-sign-out"></i>
          <i class="fas fa-moon"></i>
        </div> */}
        <h1>Knowledge, if it does not determine action, is dead to us</h1>
        <div className="quiz-categories">
          <ul className="flex-row mt-1">
            <li
              className={`${
                quizState.selectedCategory.length == QuizInfo.length
                  ? "selected-category"
                  : ""
              }`}
              onClick={() =>
                quizDispatch({ type: "SET_CATEGORY", payload: "All" })
              }
            >
              All
            </li>
            {QuizInfo.map((quiz) => (
              <li
                className={`${
                  quizState.selectedCategory[0].category == quiz.category &&
                  quizState.selectedCategory.length < QuizInfo.length
                    ? "selected-category"
                    : ""
                }`}
                onClick={() =>
                  quizDispatch({ type: "SET_CATEGORY", payload: quiz.category })
                }
              >
                {quiz.category}
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className="quiz-cards-list flex-row-center-center flex-wrap">
        {quizState?.selectedCategory?.map((quiz) => (
          <div
            className="quiz-card cursor-pointer"
            key={quiz._id}
            onClick={() => {
              quizDispatch({ type: "SET_SELECTED_QUIZ", payload: quiz.title });
              quizDispatch({
                type: "SET_QUESTIONS_LIST",
                payload: questions.filter(
                  (ques) => ques.category == quiz.category
                ),
              });
              quizDispatch({ type: "OPEN_RULES_POPUP" });
            }}
          >
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
          </div>
        ))}
      </div>
      <RulesPopup />
    </div>
  );
};
