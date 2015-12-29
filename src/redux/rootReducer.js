import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import model from './modules/model'
import selectedEntity from './modules/selectedEntity'

export default combineReducers({
  selectedEntity,
  model,
  counter,
  router
})
