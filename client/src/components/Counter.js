import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, count, label } = this.props
    return (
      <div>
        <p> {label} </p>
        <p>
          Count: {count}
          {' '}
          <button onClick={() => increment(5)}>+</button>
          {' '}
          <button onClick={() => decrement(5)}>-</button>
          {' '}
          <button onClick={() => incrementIfOdd(5)}>Increment if odd</button>
          {' '}
          <button onClick={() => incrementAsync()}>Increment async</button>
        </p>
      </div>
    )
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

export default Counter
