export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export function increment(amount = 1) {
  return {
    type: INCREMENT_COUNTER,
    amount
  }
}

export function decrement(amount = 1) {
  return {
    type: DECREMENT_COUNTER,
    amount
  }
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter.count % 2 === 0) {
      return
    }

    dispatch(increment(1))
  }
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}
