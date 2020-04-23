import React, { Component } from 'react';

import './app.css';


import Quad from '../../components/quad';
import Twitter from '../../components/twitter';
import Popupmodel from '../../components/popupmodel';

const getTweetText = game => game.current
  ? `Reached%20${game.current.number}%20on%20100%20squares%20game!`
  : 'Will%20I%20ever%20complete%20the%20100%20squares%20game%20?%20';

class App extends Component {
  render() {
    const { game, stuck, twitter, next, restart } = this.props;
    return (
      <div className="app">
        <header className="title">
          <h1><span className="end">10*10</span> <span className="header">Fill Squares Game</span></h1>
          <p>Fill the squares with numbers from 1 to 100. </p>
          <p> Condition: If the next number to be filled diagonally skip 1 cell  or 2 cells if horizontally or vertically.</p>
        </header>
        <Quad game={game} next={next} />
        {stuck &&
          <div className="buttons">
            { <button onClick={restart}>Restart</button> }
          </div>
        }
      </div>
    );
  }
}

export default App;
