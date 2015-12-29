import Immutable from 'immutable'
import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const ERD_ADD_ENTITY = 'ERD_ADD_ENTITY'
export const ERD_DELETE_ENTITY = 'ERD_DELETE_ENTITY'

// ------------------------------------
// Actions
// ------------------------------------
export const addEntity = createAction(ERD_ADD_ENTITY, name => name)
export const deleteEntity = createAction(ERD_DELETE_ENTITY, name => name)

export const actions = {
  addEntity,
  deleteEntity
}

const emptyEntity = Immutable.Map({ name: '', fields: [] })

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [ERD_ADD_ENTITY]: (state, { payload }) => {
    return Object.assign({}, state, {
      entities: state.entities.set(payload, emptyEntity.set('name', payload))
    })
  },
  [ERD_DELETE_ENTITY]: (state, { payload }) => {
    return Object.assign({}, state, {
      entities: state.entities.delete(payload)
    })
  }
}, { entities: Immutable.Map() })
