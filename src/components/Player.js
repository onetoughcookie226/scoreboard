import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Player.css'
import PlusButton from './PlusButton'
import RestartButton from './RestartButton'



export default class Player extends PureComponent {
    //defining poropTypes --look at react documentaion 
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    //adjust the Player component to require a prop type updatePlayerScore
    updatePlayerScore: PropTypes.func.isRequired,
    // restartPlayer: PropTypes.func.isRequired
  }

    //defining the method
  handleOnClick = () => {
    const {id, score} = this.props
    this.props.updatePlayerScore(id, score + 1)
  }

  restartOnClick = () => {
    const {id} = this.props
    this.props.updatePlayerScore(id, 0)
  }

  render() {
    return (
        //these are tag names for style.css
      <li className="player">
        <p className="name">{ this.props.name }</p>
        <p className="score">{ this.props.score }</p>
        {/* //pass along an onClick property to the PlusButton component */}
        <PlusButton onClick={ this.handleOnClick } />
        {/* //defining a property on an object */}
        <RestartButton onClick={ this.restartOnClick }/>
      </li>
    )
  }
}