import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter'

const initialState = {
  count: 0,
  label: 'sup'
}

export default function counter(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return {...state, count: state.count + action.amount }
  case DECREMENT_COUNTER:
    return {...state, count: state.count - action.amount }
  default:
    return state
  }
}
