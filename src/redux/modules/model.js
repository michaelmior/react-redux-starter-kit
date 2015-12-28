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

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [ERD_ADD_ENTITY]: (state, { payload }) => {
    return { entities: Array.of(payload, ...state.entities) }
  },
  [ERD_DELETE_ENTITY]: (state, { payload }) => {
    return { entities: state.entities.filter(name => name !== payload) }
  }
}, {entities: []})
