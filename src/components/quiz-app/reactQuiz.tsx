import { useState } from "react";
import ReactQuizQuestions from "./reactQuizQuestions";
import ReactQuizResult from "./reactQuizResult";

const quizQuestions = [
  {
    question: "What is 2 + 2?",
    answers: [
      {
        text: "4",
        is_correct: true,
      },
      {
        text: "3",
        is_correct: false,
      },
      {
        text: "Fish",
        is_correct: false,
      },
      {
        text: "5",
        is_correct: false,
      },
    ],
  },
  {
    question: 'How many letters are in the word "Banana"?',
    answers: [
      {
        text: "5",
        is_correct: false,
      },
      {
        text: "7",
        is_correct: false,
      },
      {
        text: "6",
        is_correct: true,
      },
      {
        text: "12",
        is_correct: false,
      },
    ],
  },
  {
    question: "Find the missing letter: C_ke",
    answers: [
      {
        text: "e",
        is_correct: false,
      },
      {
        text: "a",
        is_correct: true,
      },
      {
        text: "i",
        is_correct: false,
      },
    ],
  },
];

const quizResults = [
  {
    min: 0,
    max: 2,
    title: "Try again!",
    desc: "Do a little more studying and you may succeed!",
  },
  {
    min: 3,
    max: 3,
    title: "Wow, you're a genius!",
    desc: "Studying has definitely paid off for you!",
  },
];

export type QuizQuestionTypes = typeof quizQuestions;
export type QuizResultsTypes = typeof quizResults;

const ReactQuiz = () => {
  const [questions, setQuestions] = useState<QuizQuestionTypes>(quizQuestions);
  const [results, setResults] = useState<QuizResultsTypes>(quizResults);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);

  const reset = () => {
    setQuestionsAnswered(0);
    setTotalCorrect(0);
  };

  return (
    <div className="mx-auto max-w-[600px] w-full">
      {questionsAnswered < questions.length ? (
        <ReactQuizQuestions
          questions={questions}
          questionsAnswered={questionsAnswered}
          setQuestionsAnswered={setQuestionsAnswered}
          setTotalCorrect={setTotalCorrect}
        />
      ) : (
        <>
          <ReactQuizResult results={results} totalCorrect={totalCorrect} />
          <button
            type="button"
            className="block px-6 py-2 mx-auto my-2 text-xl text-white bg-red-400 border-0"
            onClick={() => reset()}
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default ReactQuiz;
