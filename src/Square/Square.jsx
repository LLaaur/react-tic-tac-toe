import './Square.css'

// square function with parameters that check for a winning index to trigger the win animation

function Square({id, value, handleClick, board}){
    return (
        <div className = 'square font-link' id={id} onClick={() => handleClick(id)}>
            <p className={
                id === board[0] || id === board[1] || id === board[2] ? "changed" : ""
            }>
                {value}
            </p>
        </div>
    );
}

export default Square