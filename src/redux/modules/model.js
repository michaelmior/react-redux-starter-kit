import Immutable from 'immutable'
import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const MODEL_ADD_ENTITY = 'MODEL_ADD_ENTITY'
export const MODEL_DELETE_ENTITY = 'MODEL_DELETE_ENTITY'

// ------------------------------------
// Actions
// ------------------------------------
export const addEntity = createAction(MODEL_ADD_ENTITY, name => name)
export const deleteEntity = createAction(MODEL_DELETE_ENTITY, name => name)

export const actions = {
  addEntity,
  deleteEntity
}

const emptyEntity = Immutable.Map({ name: '', fields: [] })

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [MODEL_ADD_ENTITY]: (state, { payload }) => {
    return state.set(payload, emptyEntity.set('name', payload))
  },
  [MODEL_DELETE_ENTITY]: (state, { payload }) => state.delete(payload)
}, Immutable.Map())
