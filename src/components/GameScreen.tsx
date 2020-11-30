import React, { useCallback } from "react";
import { decodeHtml } from "../helpers/API"

import { ManageData } from "../helpers/types"

const GameScreen: React.FC<ManageData> = ({
    onStateChange,
    questions,
    answers,
    setAnswers
}) => {
    const handleStateChange = useCallback(() => {
        onStateChange("end")
    }, [onStateChange])

    const handleAnswersChange = useCallback(event => {
        setAnswers(event)
    }, [setAnswers])

    const checkCorrectAnswer = (selected: number, answer: String) => {
        if(questions[selected].correct_answer === answer) {
            const newArr = [...answers]
            newArr.push(questions[selected])
            handleAnswersChange(newArr)
        }
    }
    
    return (
        <div className="App">
            <header className="App-header">
                <h1>Here are your questions!</h1>
                <ul>
                    {questions.map((q, index) => (
                        <div>
                            <h3>{q.category}</h3>
                            <li className="question-li-item" key={q.question} >
                                {decodeHtml(q.question)} {q.correct_answer}
                            </li>
                            <div className="btn-group">
                                <button onClick={() => {
                                    checkCorrectAnswer(index, "True")
                                }}>True</button>
                                <button onClick={() => {
                                    checkCorrectAnswer(index, "False")
                                }}>False</button>
                            </div>
                        </div>
                    ))}

                </ul>
                <button onClick={() => handleStateChange()}>Show me my score</button>
            </header>
        </div>
    )
}

export default GameScreen