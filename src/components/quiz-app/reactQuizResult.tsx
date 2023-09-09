import { useEffect, useState } from "react";
import type { QuizResultsTypes } from "./reactQuiz";

type ReactQuizResult = {
  results: QuizResultsTypes;
  totalCorrect: number;
};

const ReactQuizResult = ({ results, totalCorrect }: ReactQuizResult) => {
  const [resultIndex, setResultIndex] = useState(0);

  useEffect(() => {
    results.forEach((result, idx) => {
      if (result.min <= totalCorrect && result.max >= totalCorrect) {
        setResultIndex(idx);
      }
    });
  }, [totalCorrect]);

  return (
    <div>
      <h2 className="py-6 text-3xl font-bold text-center text-white bg-blue-500">
        {results[resultIndex]?.title}
      </h2>
      <p className="px-5 py-5 text-lg text-center bg-white border-b text-cyan-500 hover:bg-cyan-400 hover:text-white">
        {results[resultIndex]?.desc}
      </p>
    </div>
  );
};

export default ReactQuizResult;
