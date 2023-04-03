import {FlashCard} from "./FlashCard";
import {useState} from "react";


export const FlashCardList = ({questions, deleteCard}) => {
    const [storedIdx, setIdx] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const idx = Math.max(0, Math.min(storedIdx, questions.length-1))

    const nextPage= () => {
        if(idx+1 < questions.length) {
            setIdx(Math.min(idx+1, questions.length - 1))
            setFlipped(false)
        }
    }

    const previousPage = () => {
        if(idx > 0) {
            setIdx(Math.max(idx - 1, 0))
            setFlipped(false)
        }
    }

    if(questions.length < 1) {
        return (<div className="no-cards">
            There are no cards. Create one below!
        </div>)
    }
    const card = questions[Math.max(0, Math.min(idx, questions.length-1))]
    return (<div className="card-viewer">
        <div onClick={previousPage} className={`button ${idx > 0 ? "selectable" : "end"}`}>
            Previous
        </div>
        <FlashCard flipped={flipped} setFlipped={setFlipped} back={card.back} front={card.front} handleDelete={() => deleteCard(card) }/>
        <div onClick={nextPage}  className={`button ${(idx+1) < questions.length ? "selectable" : "end"}`}>
            Next
        </div>
    </div>)
}