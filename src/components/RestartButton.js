import React, { PureComponent } from 'react';
import './RestartButton.css'
export default class MinusButton extends PureComponent {
   


  render() {
    return ( 
        //  <button className="plus-button" onClick={this.props.onClick}>+</button>
        <button className="restart-button" onClick={this.props.onClick}>Reset</button>
    )
  }
}
 