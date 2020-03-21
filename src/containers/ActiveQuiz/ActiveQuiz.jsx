import React, {Component} from "react";
import AnswersList from './AnswersList/AnswersList.jsx';

const ActiveQuiz = props => (
    <div>
        <p className="Question">
            <span> <strong> 1.</strong> &nbsp;
            {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength} </small>
        </p>
        <AnswersList
            answers={props.answers}
            onAnswerClick = {props.onAnswerClick}
        />
    </div>
);

export default ActiveQuiz;