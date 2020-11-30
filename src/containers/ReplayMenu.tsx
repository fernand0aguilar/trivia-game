import React, { useCallback } from "react";
import { ManageData } from "../helpers/types"
import { getNewQuestions } from "../helpers/API"
import QuestionList from "../components/QuestionList";

const ReplayMenu: React.FC<ManageData> = ({
  onStateChange,
  questions,
  setQuestions,
  answers,
  setAnswers
}) => {
  const current_answers = [...answers]
  const handleStateChange = useCallback(() => {
    // Reset Game
    getNewQuestions().then(response => {
      if (setQuestions) setQuestions(response.questions);
      setAnswers([]);
    });
    onStateChange("menu")
  }, [onStateChange, setQuestions, setAnswers])

  return (
    <div>
      <h1>
        Here is your score:{" "}
        {current_answers.length}/{questions.length}
      </h1>
      <button onClick={() => handleStateChange()}>Play again!</button>
      <QuestionList 
        questions={questions}
        answers={current_answers}>
      </QuestionList>
    </div>
  )
}

export default ReplayMenu