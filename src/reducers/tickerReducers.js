import createReducer from './utilities'

const initialState = {
  started: false,
  lastFrameTime: null
}

const startTicker = state => ({...state, started: true, lastFrameTime: new Date()})
const stopTicker = state => ({...state, started: false})
const tickTime = state => ({...state, lastFrameTime: new Date()})

const handlers = new Map()
handlers.set('ticker.START_TICKER', startTicker)
        .set('ticker.STOP_TICKER', stopTicker)
        .set('ticker.TICK_TIME', tickTime)

export default createReducer(initialState, handlers)
