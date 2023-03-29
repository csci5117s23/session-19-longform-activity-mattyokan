import {FlashCard} from "./FlashCard";
import {useState} from "react";


export const FlashCardList = ({questions}) => {
    const [idx, setIdx] = useState(0);
    const card = questions[idx]
    return (<div className="card-viewer">
        <div onClick={() => setIdx(Math.max(idx-1, 0))} className={`button ${idx > 0 ? "selectable" : ""}`}>
            Previous
        </div>
        <FlashCard back={card.back} front={card.front} />
        <div onClick={() => setIdx(Math.min(idx+1, questions.length - 1))}  className={`button ${(idx+1) < questions.length ? "selectable" : ""}`}>
            Next
        </div>
    </div>)
}