import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoint, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      {/* convert a boolean to a number (if it's false, it returns 0 and if true,
      returns 1) */}
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoint}
      </p>
    </header>
  );
}

export default Progress;
