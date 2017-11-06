import createReducer from './utilities'

const initialState = {
  position: [null, null]
}

const updateMousePos = (state, action) => ({...state, position: [action.x, action.y]})

const handlers = new Map()
handlers.set('mouse.UPDATE_POSITION', updateMousePos)

export default createReducer(initialState, handlers)
