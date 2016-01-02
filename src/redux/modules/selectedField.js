import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_FIELD = 'SELECT_FIELD'
export const DESELECT_FIELD = 'DESELECT_FIELD'

// ------------------------------------
// Actions
// ------------------------------------
export const selectField = createAction(SELECT_FIELD, name => name)
export const deselectField = createAction(DESELECT_FIELD)

export const actions = {
  selectField,
  deselectField
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [SELECT_FIELD]: (state, { payload }) => payload,
  [DESELECT_FIELD]: (state, { payload }) => null
}, null)
