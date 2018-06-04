import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  boomTime(seconds) {
    if (seconds === 0) {
      return 'Boom!'
    } else {
      return `${seconds} seconds left before I go boom!`
    }
  }

  render() {
    return (
      <p>{this.boomTime(this.state.secondsLeft)}</p>
    )
  }
}


export default Bomb;
