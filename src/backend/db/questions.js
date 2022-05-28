import { v4 as uuid } from "uuid";

export const questions = [
  {
    _id: uuid(),
    category: "Javascript",
    question:
      "Is javascript a statically typed or a dynamically typed language?",
    options: [
      { code: 1, value: "Statically typed" },
      { code: 2, value: "Dynamically typed" },
      { code: 3, value: "Both first & second" },
      { code: 4, value: "None" },
    ],
    answer: { code: 2 },
  },
  {
    _id: uuid(),
    category: "Javascript",
    question: "Which of the following is not javascript data types?",
    options: [
      { code: 1, value: "Null type" },
      { code: 2, value: "Undefined type" },
      { code: 3, value: "Number type" },
      { code: 4, value: "All of the mentioned" },
    ],
    answer: { code: 4 },
  },
  {
    _id: uuid(),
    category: "Javascript",
    question:
      "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    options: [
      { code: 1, value: "Position" },
      { code: 2, value: "Window" },
      { code: 3, value: "Standard" },
      { code: 4, value: "Location" },
    ],
    answer: { code: 1 },
  },
  {
    _id: uuid(),
    category: "Javascript",
    question:
      "Which of the following can be used to call a JavaScript Code Snippet?",
    options: [
      { code: 1, value: "Function/Method" },
      { code: 2, value: "Preprocessor" },
      { code: 3, value: "Triggering Event" },
      { code: 4, value: "RMI" },
    ],
    answer: { code: 1 },
  },
  {
    _id: uuid(),
    category: "Javascript",
    question: "Which of the following scoping type does JavaScript use?",
    options: [
      { code: 1, value: "Sequential" },
      { code: 2, value: "Segmental" },
      { code: 3, value: "Lexical" },
      { code: 4, value: "Literal" },
    ],
    answer: { code: 3 },
  },
  {
    _id: uuid(),
    category: "C++",
    question: "Who invented C++?",
    options: [
      { code: 1, value: "Dennis Ritchie" },
      { code: 2, value: "Ken Thompson" },
      { code: 3, value: "Bjarne Stroustrup" },
      { code: 4, value: "Brian Kernighan" },
    ],
    answer: { code: 3 },
  },
  {
    _id: uuid(),
    category: "C++",
    question:
      "Which of the following is the correct syntax of including a user defined header files in C++?",
    options: [
      { code: 1, value: "#include [userdefined]" },
      { code: 2, value: "#include “userdefined”" },
      { code: 3, value: "#include <userdefined.h>" },
      { code: 4, value: "#include <userdefined>" },
    ],
    answer: { code: 2 },
  },
  {
    _id: uuid(),
    category: "C++",
    question: "Which of the following is used for comments in C++?",
    options: [
      { code: 1, value: "/* comment */" },
      { code: 2, value: "// comment */" },
      { code: 3, value: "// comment" },
      { code: 4, value: "both // comment or /* comment */" },
    ],
    answer: { code: 4 },
  },
  {
    _id: uuid(),
    category: "C++",
    question:
      "Which of the following user-defined header file extension used in c++?",
    options: [
      { code: 1, value: "hg" },
      { code: 2, value: "cpp" },
      { code: 3, value: "h" },
      { code: 4, value: "hff" },
    ],
    answer: { code: 3 },
  },
  {
    _id: uuid(),
    category: "C++",
    question: "Which of the following is not a type of Constructor in C++?",
    options: [
      { code: 1, value: "Default constructor" },
      { code: 2, value: "Parameterized constructor" },
      { code: 3, value: "Copy constructor" },
      { code: 4, value: "Friend constructor" },
    ],
    answer: { code: 4 },
  },
  {
    _id: uuid(),
    category: "HTML",
    question:
      "Which of the following is used to read an HTML page and render it?",
    options: [
      { code: 1, value: "Web server" },
      { code: 2, value: "Web network" },
      { code: 3, value: "Web browser" },
      { code: 4, value: "Web matrix" },
    ],
    answer: { code: 3 },
  },
  {
    _id: uuid(),
    category: "HTML",
    question: "Which element is used to get highlighted text in HTML5?",
    options: [
      { code: 1, value: "<u>" },
      { code: 2, value: "<mark>" },
      { code: 3, value: "<highlight>" },
      { code: 4, value: "<b>" },
    ],
    answer: { code: 2 },
  },
  {
    _id: uuid(),
    category: "HTML",
    question: "Which of the following is not a HTML5 tag?",
    options: [
      { code: 1, value: "<track>" },
      { code: 2, value: "<video>" },
      { code: 3, value: "<slider>" },
      { code: 4, value: "<source>" },
    ],
    answer: { code: 3 },
  },
  {
    _id: uuid(),
    category: "HTML",
    question: "Which element is used for or styling HTML5 layout?",
    options: [
      { code: 1, value: "CSS" },
      { code: 2, value: "jQuery" },
      { code: 3, value: "JavaScript" },
      { code: 4, value: "PHP" },
    ],
    answer: { code: 1 },
  },
  {
    _id: uuid(),
    category: "HTML",
    question: "Which HTML element is used for short quote?",
    options: [
      { code: 1, value: "<em>" },
      { code: 2, value: "<abbr>" },
      { code: 3, value: "<q>" },
      { code: 4, value: "<blockquote>" },
    ],
    answer: { code: 3 },
  },
  {
    _id: uuid(),
    category: "CSS",
    question:
      "Which of the following CSS framework is used to create a responsive design?",
    options: [
      { code: 1, value: "django" },
      { code: 2, value: "rails" },
      { code: 3, value: "larawell" },
      { code: 4, value: "bootstrap" },
    ],
    answer: { code: 4 },
  },
  {
    _id: uuid(),
    category: "CSS",
    question:
      "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
    options: [
      { code: 1, value: "tag" },
      { code: 2, value: "id" },
      { code: 3, value: "class" },
      { code: 4, value: "both class and tag" },
    ],
    answer: { code: 2 },
  },
  {
    _id: uuid(),
    category: "CSS",
    question:
      "Which of the following are the CSS Extension Prefixes for Webkit?",
    options: [
      { code: 1, value: "-chrome" },
      { code: 2, value: "-web" },
      { code: 3, value: "-o-" },
      { code: 4, value: "-webkit" },
    ],
    answer: { code: 4 },
  },
  {
    _id: uuid(),
    category: "CSS",
    question:
      "Which of the following is not the property of the CSS box model?",
    options: [
      { code: 1, value: "margin" },
      { code: 2, value: "color" },
      { code: 3, value: "width" },
      { code: 4, value: "height" },
    ],
    answer: { code: 2 },
  },
  {
    _id: uuid(),
    category: "CSS",
    question:
      "Which of the following CSS property specifies the look and design of an outline?",
    options: [
      { code: 1, value: "outline-style" },
      { code: 2, value: "outline-format" },
      { code: 3, value: "outline-font" },
      { code: 4, value: "none" },
    ],
    answer: { code: 2 },
  },
  {
    _id: uuid(),
    category: "React",
    question:
      "Which of the following acts as the input of a class-based component?",
    options: [
      { code: 1, value: "Class" },
      { code: 2, value: "Props" },
      { code: 3, value: "Factory" },
      { code: 4, value: "None" },
    ],
    answer: { code: 2 },
  },
  {
    _id: uuid(),
    category: "React",
    question: "How many elements can a valid react component return?",
    options: [
      { code: 1, value: "React does not return element" },
      { code: 2, value: "1 Element" },
      { code: 3, value: "More than 1 element" },
      { code: 4, value: "None of the mentioned" },
    ],
    answer: { code: 2 },
  },
  {
    _id: uuid(),
    category: "React",
    question: "Which of the following is method is not a part of ReactDOM?",
    options: [
      { code: 1, value: "ReactDOM.hydrate()" },
      { code: 2, value: "ReactDOM.createPortal()" },
      { code: 3, value: "ReactDOM.destroy()" },
      { code: 4, value: "All of the mentioned" },
    ],
    answer: { code: 3 },
  },
  {
    _id: uuid(),
    category: "React",
    question:
      "Which of the following is used to pass data to a component from outside in React?",
    options: [
      { code: 1, value: "props" },
      { code: 2, value: "render with arguments" },
      { code: 3, value: "setState" },
      { code: 4, value: "PropTypes" },
    ],
    answer: { code: 1 },
  },
  {
    _id: uuid(),
    category: "React",
    question:
      "What of the following is used in React.js to increase performance?",
    options: [
      { code: 1, value: "Virtual DOM" },
      { code: 2, value: "Original DOM" },
      { code: 3, value: "Both first & second" },
      { code: 4, value: "None of the above" },
    ],
    answer: { code: 1 },
  },
];
