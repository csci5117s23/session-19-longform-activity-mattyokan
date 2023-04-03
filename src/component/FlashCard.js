export const FlashCard = ({front, back, handleDelete, flipped, setFlipped}) => {
    return (
        <div className="flashcard-container">
            <button className="delete" onClick={() => handleDelete()}>X</button>
            <div className={"flashcard"} onClick={() => setFlipped(!flipped)}>
                {flipped ? <span className="back">{back}</span> : <span className="front">{front}</span>}
            </div>
        </div>
    )
}