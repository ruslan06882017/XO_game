import React, {Component} from "react";
import ActiveQuiz from '../ActiveQuiz/ActiveQuiz.jsx'

class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            quiz: [
                {
                    answers: [
                        {text: 'Вопрос 1'},
                        {text: 'Вопрос 2'},
                        {text: 'Вопрос 3'},
                        {text: 'Вопрос 4'}
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Quiz</h1>
                    <div className="ActiveQuiz">
                        <ActiveQuiz
                            answers={this.state.quiz[0].answers}
                        />
                    </div>
                    </div>
            </div>
        )
    }

}

export default Quiz;