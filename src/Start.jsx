import React from "react";
import Quiz from "./Quiz";
import './Start.css'

export default function Start() {  
    const [quiz, setQuiz] = React.useState(false);

    const [ques, setQuestion] = React.useState([])
    
    React.useEffect(() => {
        console.log('effect')
            fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
            .then(res => res.json())
            .then(data => {
                JSON.stringify(setQuestion(data.results))
            })
        },[])

    function createNewQuiz() {
        setQuiz(prevQuiz => !prevQuiz)
    }

    return (
        <div>
            { quiz ? <Quiz ques={ques}/> : 
                <div className="quiz-start">
                    <h2>QuiZZical</h2>
                    <h4>Lets have some Quiz</h4>
                    <button style={{ color:'white' }} onClick={createNewQuiz}>Start quiz</button>
                </div>
            }
        </div>   
    )
}