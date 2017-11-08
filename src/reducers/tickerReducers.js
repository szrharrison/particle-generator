import createReducer from './utilities'

const initialState = {
  started: false,
  lastFrameTime: null,
  ticks: 0,
  time: null,
  startTime: null,
  totalTime: 0
}

const startTicker = state => ({
  ...state,
  started: true,
  lastFrameTime: Date.now(),
  startTime: Date.now()
})
const stopTicker = state => {
  let totalTime = state.totalTime
  if(state.startTime) {
    totalTime = Date.now() - state.startTime + state.totalTime
  }
  return {
    ...state,
    started: false,
    lastFrameTime: null,
    startTime: null,
    totalTime: totalTime
  }
}
const tickTime = state => ({
  ...state,
  lastFrameTime: Date.now(),
  ticks: state.ticks + 1,
})

const handlers = new Map()
handlers.set('ticker.START_TICKER', startTicker)
        .set('ticker.STOP_TICKER', stopTicker)
        .set('ticker.TICK_TIME', tickTime)

export default createReducer(initialState, handlers)
