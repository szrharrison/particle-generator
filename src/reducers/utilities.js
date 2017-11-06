export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if(handlers.has(action.type)) {
      return handlers.get(action.type)(state, action)
    }
    return state
  }
}
