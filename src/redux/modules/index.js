import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import counter from './counter'
import erd from './erd'

export default combineReducers({
  counter,
  erd,
  router: routeReducer
})
