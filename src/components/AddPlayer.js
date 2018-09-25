import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import "./AddPlayer.css"

export default class AddPlayer extends PureComponent {
  //Adding the prop type to our componenet

  static propTypes = {
    addPlayer: PropTypes.func.isRequired
  }

  state = {name:''}

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Submitting form with name ${this.state.name}`) 
    this.props.addPlayer(this.state.name)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}


// import React, { PureComponent } from 'react';

// export default class AddPlayer extends PureComponent {
//   handleSubmit(event) {
//     event.preventDefault()
//     console.log('Submitting form...')
//   }

//   render() {
//     return (
//       <div className="add-player">
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" name="name" />
//           </label>
//           <input type="submit" value="Add" />
//         </form>
//       </div>
//     )
//   }
// }



// import React, { PureComponent } from 'react';

// export default class AddPlayer extends PureComponent {
//   render() {
//     return (
//       <div className="add-player">
//         <form>
//           <label>
//             Name:
//             <input type="text" name="name" />
//           </label>
//           <input type="submit" value="Add" />
//         </form>
//       </div>
//     )
//   }
// }