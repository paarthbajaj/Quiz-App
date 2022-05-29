import { createContext, useContext, useReducer } from "react";
import { QuizInfo } from "../backend/db/QuizInfo";

const QuizContext = createContext();
const QuizProvider = ({ children }) => {
  const quizReducer = (state, action) => {
    switch (action.type) {
      case "SET_QUESTIONS_LIST":
        return { ...state, listOfQuestions: action.payload };
      case "SET_COUNTER":
        return { ...state, counter: action.payload };
      case "INCREASE_COUNTER":
        return { ...state, counter: state.counter + 1 };
      case "SET_SELECTED_QUIZ":
        return { ...state, selectedQuiz: action.payload };
      case "CURRENT_QUESTION":
        return {
          ...state,
          currentQuestionn: state.listOfQuestions[state.counter],
        };
      case "SELECT_OPTION":
        state.listOfQuestions[state.counter].selectedAnswer.code =
          action.payload.code;
        return {
          ...state,
          selectedOption: [
            ...state.selectedOption.slice(0, state.counter),
            action.payload,
          ],
        };
      case "INCREASE_MARKS":
        return { ...state, marks: state.marks + 10 };
      case "DECREASE_MARKS":
        return { ...state, marks: state.marks - 5 };
      case "CLOSE_RULES_POPUP":
        return { ...state, isPopupOpen: false };
      case "OPEN_RULES_POPUP":
        return { ...state, isPopupOpen: true };
      case "SET_CATEGORY":
        return {
          ...state,
          selectedCategory:
            action.payload != "All"
              ? QuizInfo.filter((quiz) => quiz.category == action.payload)
              : QuizInfo,
        };
    }
  };
  const initialState = {
    listOfQuestions: [],
    counter: 0,
    selectedQuiz: "",
    currentQuestionn: {},
    selectedOption: [],
    marks: 0,
    isPopupOpen: false,
    selectedCategory: QuizInfo,
  };
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);
  let currentQuestion = quizState.listOfQuestions[quizState.counter];

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch, currentQuestion }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);
export { useQuiz, QuizProvider };
