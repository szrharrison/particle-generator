import { combineReducers } from 'redux'

import particleReducers from './particleReducers'
import tickerReducers from './tickerReducers'
import mouseReducers from './mouseReducers'
import svgReducers from './svgReducers'

export default combineReducers({
  particles: particleReducers,
  ticker: tickerReducers,
  mouse: mouseReducers,
  svg: svgReducers
})
