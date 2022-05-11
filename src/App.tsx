import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <Board />
  )
}
class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      xIsnext: true
    }
  }
  handleClick(props) {
    const squares = this.state.squares.slice();
    squares[props] = "X"
    this.setState({
      squares: squares,
      //2.左のsquaresはthis.stateのもの、右はhandleclickの中で宣言したものだとわかったが、なぜ二つが都合のいいように使われているのかわからない。
      xIsnext: !this.state.xIsnext
    })
  }
  renderSquare(props) {
    return (
      <Square 
        value={this.state.squares[props]}
        onClick={() => this.handleClick(props)}
      />
    )
  }
  render() {
    return(
      <div>
        <div className="divRow">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="divRow">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="divRow">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//1.this.propsではなくpropsだけじゃなぜダメなのか
//         {this.props.value}
//       </button>
//     )
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}

export default App;
