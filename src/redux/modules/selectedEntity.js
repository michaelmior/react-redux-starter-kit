import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_ENTITY = 'SELECT_ENTITY'
export const DESELECT_ENTITY = 'DESELECT_ENTITY'

// ------------------------------------
// Actions
// ------------------------------------
export const selectEntity = createAction(SELECT_ENTITY, name => name)
export const deselectEntity = createAction(DESELECT_ENTITY)

export const actions = {
  selectEntity,
  deselectEntity
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [SELECT_ENTITY]: (state, { payload }) => payload,
  [DESELECT_ENTITY]: (state, { payload }) => null
}, null)
