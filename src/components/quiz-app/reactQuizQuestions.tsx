import { useEffect, type Dispatch, type SetStateAction, useState } from "react";
import type { QuizQuestionTypes } from "./reactQuiz";

type ReactQuizQuestionsTypes = {
  questions: QuizQuestionTypes;
  questionsAnswered: number;
  setQuestionsAnswered: Dispatch<SetStateAction<number>>;
  setTotalCorrect: Dispatch<SetStateAction<number>>;
};

const ReactQuizQuestions = ({
  questions,
  questionsAnswered,
  setQuestionsAnswered,
  setTotalCorrect,
}: ReactQuizQuestionsTypes) => {
  const [progressBar, setProgressBar] = useState(0);

  useEffect(
    () => setProgressBar((questionsAnswered / questions.length) * 100),
    [questionsAnswered]
  );

  const handleClick = (is_correct: boolean) => {
    if (is_correct) setTotalCorrect((val) => val + 1);
    setQuestionsAnswered((val) => val + 1);
  };

  return (
    <div>
      <div className="relative w-full h-12 text-lg text-white bg-slate-400">
        <div
          className="h-12 transition-[width] duration-[0.3s] ease-linear bg-red-400"
          style={{ width: `${progressBar}%` }}
        ></div>
        <p className="absolute left-0 w-full text-center cursor-pointer top-2">
          {questionsAnswered} out of {questions.length} questions answered
        </p>
      </div>

      {questions.map(
        ({ question, answers }, qIdx) =>
          questionsAnswered === qIdx && (
            <div key={qIdx}>
              <h2 className="py-6 text-3xl font-bold text-center text-white bg-blue-500">
                {question}
              </h2>

              {answers.map(({ text, is_correct }, idx) => (
                <p
                  key={idx}
                  className="px-5 py-5 text-lg bg-white border-b text-cyan-500 hover:bg-cyan-400 hover:text-white"
                  onClick={() => handleClick(is_correct)}
                >
                  {text}
                </p>
              ))}
            </div>
          )
      )}
    </div>
  );
};

export default ReactQuizQuestions;
