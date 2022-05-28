import { createContext, useContext, useReducer } from "react";

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
        return {
          ...state,
          selectedOption: [
            ...state.selectedOption.slice(0, state.counter),
            action.payload,
            // ...state.selectedOption.slice(state.counter),
          ],
        };
    }
  };
  const initialState = {
    listOfQuestions: [],
    counter: 0,
    selectedQuiz: "",
    currentQuestionn: {},
    selectedOption: [],
  };
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

  console.log(quizState);
  let currentQuestion = quizState.listOfQuestions[quizState.counter];

  return (
    <QuizContext.Provider value={{ quizState, quizDispatch, currentQuestion }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);
export { useQuiz, QuizProvider };
