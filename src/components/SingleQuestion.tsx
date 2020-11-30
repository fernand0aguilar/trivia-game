import React from "react";

import { decodeHtml } from "../helpers/API"
import { QuizSchema } from "../helpers/types"


const SingleQuestion: React.FC<{ question: QuizSchema, checkCorrectAnswer: Function }> = 
    ({ question, checkCorrectAnswer }) => (
    <div>
        <h6>
            Category: {question.category}
        </h6>
            Question: {decodeHtml(question.question)}
            <div className="btn-group">
                <button onClick={() => {
                    checkCorrectAnswer(question, "True")
                }}>True</button>
                <button onClick={() => {
                    checkCorrectAnswer(question, "False")
                }}>False</button>
            </div>
    </div>
);

export default SingleQuestion