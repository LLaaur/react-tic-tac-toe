import './Square.css'

function Square({id, value, handleClick, board}){
    return (
        <div className = 'square' id={id} onClick={() => handleClick(id)}>
            {/* <p className={
                id === board[0] || id === board[1] || id === board[2] ? "changed" : ""
            }>
                {value}
            </p> */}
        </div>
    );
}

export default Square