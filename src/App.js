import './App.css';
import {FlashCardList} from "./component/FlashCardList";
import {CardForm} from "./component/CardForm";
import {useState} from "react";

function App() {
    const [questions, setQuestions] = useState([
        {front: "question1", back: "answer1"},
        {front: "question2", back: "answer2"},
        {front: "question3", back: "answer3"},
    ])

    return (
        <div className="App">
            <FlashCardList questions={questions}/>
            <CardForm addCard={(front, back) => {
                let current = questions
                current.push({front: front, back: back})
                setQuestions(current)
            }}/>
        </div>
    );
}

export default App;
