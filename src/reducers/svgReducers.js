import createReducer from './utilities'

const initialState = {
  width: 800,
  height: 600
}

const handlers = new Map()

export default createReducer(initialState, handlers)
