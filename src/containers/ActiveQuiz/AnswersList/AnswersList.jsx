import React from "react";
import AnswerItem from './AnswerItem/AnswerItem.jsx';

const AnswersList = props => (
    <ul className="AnswersList">
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem 
                    key={index}
                    answer={answer}
                    onAnswerClick = {props.onAnswerClick}
                />
            )
        })}
    </ul>
)
export default AnswersList;