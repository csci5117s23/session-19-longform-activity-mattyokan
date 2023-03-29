import {useState} from "react";

export const CardForm = ({addCard}) => {
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");


    return (
        <div className="card-form">
            <h1>Add New Card</h1>
            <div>
                <input onChange={(e) => setFront(e.target.value)} placeholder="front" value={front}/>
                <input onChange={(e) => setBack(e.target.value)} placeholder="back" value={back}/>
                <button onClick={() => addCard(front, back)}>Create</button>
            </div>
        </div>
    )
}