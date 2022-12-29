import './Score.css'


function Score(score){
    return (
        <div className="players">

            <div className="human"><h3>{score.x}</h3></div>
            <div className="tie"><h3>{score.tie}</h3></div>
            <div className="bot"> <h3>{score.o}</h3> </div>

        </div>
    );
}

export default Score