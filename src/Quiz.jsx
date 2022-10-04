import React from "react";
import {nanoid} from "nanoid";

export default function Quiz(props) {

    const [but, setBut] = React.useState(false);

    const [saveAns, setSaveAns] = React.useState([]);

    const all_correct_ans = []
    return (
        <div className="quiz-start">
            {
                props.ques.map((q,i) => {

                    all_correct_ans.push(q.correct_answer);
                    const answers = [q.correct_answer, q.incorrect_answers[0], q.incorrect_answers[1], q.incorrect_answers[2]]

                    function handleClick(title) {
                        console.log(but)
                    }

                    const styles = {
                        backgroundColor: but && 'lightgreen'
                    }

                    return(
                        <div className="quiz" key={i}>
                            <p className="quiz-question">{q.question}</p>
                            <div className="btn">
                                { answers.map((title) => <button key={nanoid()} className="quiz-btn" style={styles} onClick={() => handleClick(title)}>{title}</button>)}
                            </div>
                        </div>
                    )
                })
            }
            <p>{saveAns}</p>
            <button className="quiz-submit">Submit</button>
        </div>
    )
}