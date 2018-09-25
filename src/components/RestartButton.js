import React, { PureComponent } from 'react'
export default class MinusButton extends PureComponent {
   


  render() {
    return ( 
        //  <button className="plus-button" onClick={this.props.onClick}>+</button>
        <button className="restart-button" onClick={this.props.onClick}>Restart</button>
    )
  }
}
 