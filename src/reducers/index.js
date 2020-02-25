import { combineReducers } from 'redux'

import { svgParticleReducers, canvasParticleReducers } from './particleReducers'
import tickerReducers from './tickerReducers'
import mouseReducers from './mouseReducers'
import svgReducers from './svgReducers'
import canvasReducers from './canvasReducers'

export default combineReducers({
  svgParticles: svgParticleReducers,
  canvasParticles: canvasParticleReducers,
  ticker: tickerReducers,
  mouse: mouseReducers,
  svg: svgReducers,
  canvas: canvasReducers
})
