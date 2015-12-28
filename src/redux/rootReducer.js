import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import model from './modules/model'

export default combineReducers({
  counter,
  model,
  router
})
