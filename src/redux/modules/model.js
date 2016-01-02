import Immutable from 'immutable'
import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const MODEL_ADD_ENTITY = 'MODEL_ADD_ENTITY'
export const MODEL_DELETE_ENTITY = 'MODEL_DELETE_ENTITY'
export const MODEL_ADD_FIELD = 'MODEL_ADD_FIELD'
export const MODEL_DELETE_FIELD = 'MODEL_DELETE_FIELD'

export const fieldTypes = {
  DATE: 'date',
  FLOAT: 'float',
  HASH: 'Hash',
  ID: 'id',
  INT: 'integer',
  STRING: 'string'
}

// ------------------------------------
// Actions
// ------------------------------------
export const addEntity = createAction(MODEL_ADD_ENTITY)
export const deleteEntity = createAction(MODEL_DELETE_ENTITY)
export const addField = createAction(MODEL_ADD_FIELD)
export const deleteField = createAction(MODEL_DELETE_FIELD)

export const actions = {
  addEntity,
  deleteEntity,
  addField,
  deleteField
}

const emptyEntity = Immutable.fromJS({ name: '', fields: {} })
const emptyField = Immutable.fromJS({ name: '', type: null })

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [MODEL_ADD_ENTITY]: (state, { payload: name }) => {
    return state.set(name, emptyEntity.set('name', name))
  },
  [MODEL_DELETE_ENTITY]: (state, { payload: name }) => state.delete(name),
  [MODEL_ADD_FIELD]: (state, { payload: [entity, field, type] }) => {
    return state.setIn([entity, 'fields', field],
                       emptyField.merge({name: field, type: type}))
  },
  [MODEL_DELETE_FIELD]: (state, { payload: [entity, field] }) => {
    return state.deleteIn([entity, 'fields', field])
  }
}, Immutable.Map())
