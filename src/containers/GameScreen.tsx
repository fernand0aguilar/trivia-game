import React, { useCallback } from "react";

import SingleQuestion from "../components/SingleQuestion";
import { ManageData, QuizSchema } from "../helpers/types"

const GameScreen: React.FC<ManageData> = ({
    onStateChange,
    questions,
    answers,
    setAnswers
}) => {
    const [currentQuestion, setcurrentQuestion] = React.useState<QuizSchema>(questions[0]);

    const handleStateChange = useCallback(() => {
        onStateChange("end")
    }, [onStateChange])

    const handleAnswersChange = useCallback(event => {
        setAnswers(event)
    }, [setAnswers])

    const checkCorrectAnswer = (selected: QuizSchema, answer: String) => {
        const index = questions.indexOf(selected)
        if (questions[index].correct_answer === answer) {
            const newArr = [...answers]
            newArr.push(questions[index])
            handleAnswersChange(newArr)
        }
        (index !== questions.length - 1)
            ? setcurrentQuestion(questions[index + 1])
            : handleStateChange()
    }

    return (
        <div>
            <h3>Here are your questions!</h3>
            <SingleQuestion
                question={currentQuestion}
                checkCorrectAnswer={checkCorrectAnswer}>
            </SingleQuestion>
            <button onClick={() => handleStateChange()}>Show me my score</button>
        </div>
    )
}

export default GameScreen