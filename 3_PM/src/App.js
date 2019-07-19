import React, { Component } from "react";
import "./App.css";

const WinMessage = () => <div>You Win!</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomValue: Math.floor(Math.random() * 100),
      guess: -1,
      win: false
    };
  }

  updateGuess = event => {
    this.setState({ guess: parseInt(event.target.value) });
  };

  checkWin = event => {
    event.preventDefault();
    // TODO: check if guess equal to randomValue and update this.state.win
    if (this.state.guess === this.state.randomValue) {
      this.setState({ win: true });
    } else {
      this.setState({ win: false });
    }
    // or can do
    // this.setState({
    //   win: this.state.guess === this.state.randomValue
    // })
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Guessing Game!</h1>
        </div>

        <form>
          <label>
            Enter a guess:
            <input
              id="inp"
              type="number"
              value={this.state.value}
              onChange={this.updateGuess}
            />
          </label>
          <button id="sub" onClick={this.checkWin}>
            Submit
          </button>
        </form>
        {this.state.win && <WinMessage />}
      </div>
    );
  }
}

export default App;
