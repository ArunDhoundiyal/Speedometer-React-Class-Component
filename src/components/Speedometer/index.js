import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(PreviousState => {
      let count
      console.log(`Previous Count ${PreviousState.count} `)
      if (PreviousState.count >= 0 && PreviousState.count <= 230) {
        count = {count: PreviousState.count + 10}
      }
      return count
    })
  }

  onDecrement = () => {
    this.setState(PreviousState => {
      let count
      console.log(`Previous Count ${PreviousState.count}`)
      if (PreviousState.count >= 10) {
        count = {count: PreviousState.count - 10}
      }
      return count
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="top-heading">SPEEDOMETER</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-style"
        />

        <h1 className="speed-heading">
          Speed is <span>{count}</span>mph
        </h1>
        <p className="speed-text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="accelerate-button"
            onClick={this.onIncrement}
            type="button"
          >
            Accelerate
          </button>
          <button
            className="brake-button"
            onClick={this.onDecrement}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
