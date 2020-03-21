import React, {Component} from "react";
import ActiveQuiz from '../ActiveQuiz/ActiveQuiz.jsx'

class Quiz extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeQuestion: 0,
            quiz: [
                {

                    question: "Какого цвета небо?",
                    id: 1,
                    rightAnswerId: 2,
                    answers: [
                        {text: 'Белого', id: 1},
                        {text: 'Голубого', id: 2},
                        {text: 'Черного', id: 3},
                        {text: 'Красного', id: 4}
                    ]
                },
                {

                    question: "Год основая СПБ",
                    id: 3,
                    rightAnswerId: 3,
                    answers: [
                        {text: '1700', id: 1},
                        {text: '1705', id: 2},
                        {text: '1703', id: 3},
                        {text: '1800', id: 4}
                    ]
                }
            ]
        }
    }

    onAnswerClickHandler = (answerId) => {
        //console.log('answerId = ' , answerId);
        const question = this.state.quiz[this.state.activeQuestion];
        if (question.rightAnswerId === answerId){
            const timeOut = window.setTimeout(() => {
                if (this.isQuizFinished()){
                    console.log('finished');
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    });
                }
            window.clearTimeout(timeOut);  
            }, 1000)
        } else {

        }
    };
    
    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }
    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Quiz</h1>
                    <div className="ActiveQuiz">
                        <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                        />
                    </div>
                    </div>
            </div>
        )
    }

}

export default Quiz;