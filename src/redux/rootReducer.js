import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import erd from './modules/erd'

export default combineReducers({
  counter,
  erd,
  router
})
