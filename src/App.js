import logo from './logo.svg';
import './App.css';
import {FlashCardList} from "./component/FlashCardList";

function App() {
  const QUESTIONS = [{front: "question1", back:"answer1"},
                    {front: "question2", back:"answer2"},
                    {front: "question3", back:"answer3"},]

  return (
    <div className="App">
        <FlashCardList questions={QUESTIONS}>

        </FlashCardList>
    </div>
  );
}

export default App;
