import React, { PureComponent } from 'react'
import Player from './Player'
import './Scoreboard.css'

export default class Scoreboard extends PureComponent {
//declar the name the players in n array of objects

// do i need to put this in a constructor?
state = {
    players: [
        {
          id: 1,
          name: 'Wouter',
          score: 2
        },
        {
          id: 2,
          name: 'Mimi',
          score: 5
        },
        {
          id: 3,
          name: 'Milan',
          score: 4
        }
      ]
    }


    updatePlayerScore = (id, score) => {
        const updatedPlayers = this.state.players.map(
          player => {
            if (player.id === id) {
              return {
                ...player,
                score
              }
            }
            else {
              return player
            }
          }
        )
        this.setState({ players: updatedPlayers })
      }

  renderPlayer=(player) => {
      //rendering the player component and passing the name, score and key propertirs.
    return (
     <Player
        id={player.id}
        name={player.name}
        score={player.score}
        //React needs to know witch thing you are updateing...if you have an input the text doesnt move around
        key={player.id}
        updatePlayerScore={this.updatePlayerScore}
        />)
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
             {/* ordering the players score with sort method */}
          {
            this.state.players
              .sort((a, b) => b.score - a.score)
              .map(this.renderPlayer)
          }
        </ul>
      </div>
    )
  }


}

// import React, { PureComponent } from 'react'
// import Player from './Player'

// export default class Scoreboard extends PureComponent {
//   render() {
//     return (
//       <div className="scoreboard">
//         <h1>Scoreboard</h1>
//         <ul>
//           <Player name="Wouter" score={2} />
//           <Player name="Mimi" score={5} />
//           <Player name="Milan" score={4} />
//         </ul>
//       </div>
//     )
//   }
// }