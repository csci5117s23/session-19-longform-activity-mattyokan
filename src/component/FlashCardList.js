import {FlashCard} from "./FlashCard";
import {useState} from "react";


export const FlashCardList = ({questions}) => {
    const [idx, setIdx] = useState(0);
    console.log("Card idx ", idx)
    const card = questions[idx]
    return (<div className="card-viewer">
        <div onClick={() => setIdx(Math.max(idx-1, 0))} className="button">
            Previous
        </div>
        <FlashCard back={card.back} front={card.front} />
        <div onClick={() => setIdx(Math.min(idx+1, questions.length - 1))}  className="button">
            Next
        </div>
    </div>)
}