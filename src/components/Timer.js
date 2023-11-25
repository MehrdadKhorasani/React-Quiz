import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      // each time we restart quiz, a new timer got added and so then we hand many timers running at the same time which were all dispatching this action
      // so then we need the cleanUp here. otherwise the timer keeps running, even when we restart the quiz.
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
