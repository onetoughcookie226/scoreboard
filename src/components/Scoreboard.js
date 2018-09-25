import React, { PureComponent } from 'react'
import Player from './Player'
import './Scoreboard.css'


const players = [
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

export default class Scoreboard extends PureComponent {
  renderPlayer(player) {
    return <Player
      name={player.name}
      score={player.score}
      key={player.id}
    />
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {
            players
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