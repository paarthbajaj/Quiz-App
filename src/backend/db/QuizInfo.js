import { v4 as uuid } from "uuid";
/**
 * Quiz's information is added here
 * */

export const QuizInfo = [
  {
    _id: uuid(),
    image: "/assets/thumbnails/1.png",
    title: "Decode the code",
    category: "Javascript",
    numberOfQues: "5",
  },
  {
    _id: uuid(),
    image: "/assets/thumbnails/2.jpg",
    title: "Climb the code",
    category: "React",
    numberOfQues: "5",
  },
  {
    _id: uuid(),
    image: "/assets/thumbnails/3.jpg",
    title: "Guess the way out",
    category: "HTML",
    numberOfQues: "5",
  },
  {
    _id: uuid(),
    image: "/assets/thumbnails/4.webp",
    title: "Finding Javascript",
    category: "CSS",
    numberOfQues: "5",
  },
  {
    _id: uuid(),
    image: "/assets/thumbnails/5.png",
    title: "Make trivia great again",
    category: "C++",
    numberOfQues: "5",
  },
];
