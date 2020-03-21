import React, {Component} from "react";
import ActiveQuiz from '../ActiveQuiz/ActiveQuiz.jsx'

class Quiz extends Component {

    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Quiz</h1>
                    <div className="ActiveQuiz">
                        <ActiveQuiz  />
                    </div>
                    </div>
            </div>
        )
    }

}

export default Quiz;