import './Score.css'
import aiBot from '/home/laur/Desktop/react-tic-tac-toe/my-app/src/assets/ai.png'
import humanPlayer from '/home/laur/Desktop/react-tic-tac-toe/my-app/src/assets/user-icon.png'
import draw from '/home/laur/Desktop/react-tic-tac-toe/my-app/src/assets/equal.png'


// render the player, the tie and the bot scores

function Score({ score }) {
    return (
      <div className="score font-link">
        <div>
          <span className='players'><img src={humanPlayer} alt='human player'/>Player</span>
          <br className='emptySpace' />
          <span>{score.x}</span>
        </div>
        <div>
          <span className='players' ><img src={draw} alt='draw'/>Tie</span>
          <br className='emptySpace' />
          <span>{score.tie}</span>
        </div>
        <div>
          <span className='players'><img src={aiBot} alt='bot'/>Computer</span>
          <br className='emptySpace' />
          <span>{score.o}</span>
        </div>
      </div>
    );
  }

export default Score