import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'

// map the global state to the props of the counter
function mapStateToProps(state) {
  return {
    ...state.counter
  }
}

// bind action creators
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

// connect to the global tree
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
