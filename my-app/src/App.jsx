import Board from './Board/Board';
import Square from './Square/Square';
import './App.css';
import Score from './Score/Score';

function App(){
    return(
        <div className="app">
            <Board />
            <Score />
        </div>
    )
};

export default App