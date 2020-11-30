
import React from "react";

import { decodeHtml } from "../helpers/API"
import { QuizSchema } from "../helpers/types"

const QuestionList: React.FC<{ questions: QuizSchema[], answers: QuizSchema[] }> =
    ({ questions, answers }) => (
        <div>
            <ul>
                {questions.map((q) => (
                    <div>
                        <li className="question-li-item" key={q.question}>
                            <b>Question:</b>{decodeHtml(q.question)}
                            <br/>
                            {answers.includes(q)
                                ?   (<p className="question-item-right">
                                        <b>Your Answer:</b> {q.correct_answer}
                                    </p>)
                                :   (<p className="question-item-wrong">
                                        <b>Your Answer:</b> {q.incorrect_answers}
                                    </p>)
                            }
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );

export default QuestionList;