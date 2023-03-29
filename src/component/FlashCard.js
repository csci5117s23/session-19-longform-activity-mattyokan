import {useState} from "react";


export const FlashCard = ({front, back}) => {
    const [flipped, setFlipped] = useState(false)

    return (<div className={"flashcard"} onClick={() => setFlipped(!flipped)}>
        {flipped ? back : front}
    </div>)
}