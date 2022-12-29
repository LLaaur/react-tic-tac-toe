import './Score.css'


function Score({ score }) {
    return (
      <div className="score">
        <div>
          <span>Player</span>
          <br />
          <span>{score.x}</span>
        </div>
        <div>
          <span>Tie</span>
          <br />
          <span>{score.tie}</span>
        </div>
        <div>
          <span>Computer</span>
          <br />
          <span>{score.o}</span>
        </div>
      </div>
    );
  }

export default Score