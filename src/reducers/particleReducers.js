import { randomNormal as d3RandomNormal, range as d3Range, randomUniform as d3RandomUniform } from 'd3'

import createReducer from './utilities'

const G = 0.3, // Gravity
      randNormal = d3RandomNormal(0.3, 2),
      randNormal2 = d3RandomNormal(0.5, 1.8)

const initialState = {
  all: [],
  particleIndex: 0,
  rate: 100,
  charges: [],
  particlesStarted: false
}

const _generateCharges = (N, width, height) => (
    d3Range(N).map(_ => ({
        x: d3RandomUniform(.2*width, .8*width)(),
        y: d3RandomUniform(.2*height, .8*height)(),
        strength: d3RandomUniform(1000, 10000)()
    }))
)

const startParticles = state => ({...state, particlesStarted: true})
const stopParticles = state => ({...state, particlesStarted: false})
const createParticles = (state, action) => {
  const newParticles = state.all.slice()

  for (let i = 0; i < action.N; i++) {
    let particle = {
      key: state.particleIndex + i,
      x: action.x,
      y: action.y
    }

    particle.vector = [
      particle.key % 2 ? -randNormal() : randNormal(), // X-Velocity
      -randNormal2()*3                                // Y-Velocity
    ]

    newParticles.unshift(particle)
  }

  return {
    ...state,
    all: newParticles,
    particleIndex: state.particleIndex + action.N + 1
  }
}
const moveParticles = (state, action) => {
  const {svgWidth, svgHeight, lastFrameTime} = action,
        newFrameTime = new Date(),
        multiplier = (newFrameTime - lastFrameTime)/(1000/60)

  let movedParticles = state.all.filter(
      p => !(p.y > svgHeight || p.x < 0 || p.x > svgWidth)
    ).map( p => {
      let [vx, vy] = p.vector

      // rate * time = change in position
      p.x += vx * multiplier
      p.y += vy * multiplier

      // state.charges.forEach(charge => {
      //     let dx = p.x - charge.x,
      //         dy = p.y - charge.y,
      //         r2 = dx**2 + dy**2,
      //         rX = (dx < 0 ? -(1/r2) : 1/r2) * charge.strength,
      //         rY = (dy < 0 ? -(1/r2) : 1/r2) * charge.strength
      //
      //     p.x += rX
      //     p.y += rY
      // })

      p.vector[1] += G * multiplier
      return p
    })

  return {
    ...state,
    all: movedParticles
  }
}

const handlers = new Map()
handlers.set('particles.START_PARTICLES', startParticles)
        .set('particles.STOP_PARTICLES', stopParticles)
        .set('particles.CREATE_PARTICLES', createParticles)
        .set('ticker.TICK_TIME', moveParticles)

export default createReducer(initialState, handlers)
