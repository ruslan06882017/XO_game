import React, {Component} from "react";
import AnswersList from './AnswersList/AnswersList.jsx';

const ActiveQuiz = props => (
    <div>
        <p className="Question">
            <span> <strong> 1.</strong> &nbsp;
             Как дела?
            </span>
            <small>4 из 12 </small>
        </p>
        <AnswersList
            answers={props.answers}
        />
    </div>
);

export default ActiveQuiz;