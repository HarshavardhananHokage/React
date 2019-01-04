import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
      return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
      );
}
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={this.props.currSquare[i]} onClick={() => this.props.handleClick(i)} />;
    }
  
    render() {
  
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
      constructor(props) {
          super(props);

          this.state = {
              history: [
                  {
                      squares: Array(9).fill(null)
                  }
                ],
                stepNumber: 0,
                isXNext: true
          }
      }

      handleClick(i) {
        let history = this.state.history.slice(0, this.state.stepNumber + 1);
        let current = history[history.length - 1];
        let squares = current.squares.slice();
        if(calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.isXNext ? 'X' : 'O';
        this.setState({
            history: [...history, { squares }],
            stepNumber: history.length,
            isXNext: !this.state.isXNext
        })
    }

    jumpTo(step) {

        this.setState({
            stepNumber: step,
            isXNext: (step % 2) === 0
        })

    }

    render() {
        let current = this.state.history[this.state.stepNumber];
        let currSquare = current.squares;
        let listOfMoves = this.state.history.map((step, move) => {
            const desc = move ? "Go to move " + move : "Go to game start";
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        });
        const winner = calculateWinner(currSquare);
        let status;
        if(winner) {
            status = 'Winner => Player ' + winner;
        }
        else {
            status = 'Next player: ' + (this.state.isXNext ? 'X' : 'O');
        }
      return (
        <div className="game">
          <div className="game-board">
            <Board currSquare={currSquare} handleClick={(i) => this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{listOfMoves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const winningCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let i = 0; i < winningCombo.length; i++) {
        let [a, b, c] = winningCombo[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}