import { randomNormal as d3RandomNormal } from 'd3'

import createReducer from './utilities'

const G = 0.3, // Gravity
      randNormal = d3RandomNormal(1, 2),
      randNormal2 = d3RandomNormal(0.5, 1.8)

const initialState = {
  all: {},
  allIds: [],
  minParticleIndex: 0,
  particleIndex: 0,
  rate: 150,
  particlesStarted: false
}

const startParticles = state => ({...state, particlesStarted: true})
const stopParticles = state => ({...state, particlesStarted: false})
const createParticles = (state, action) => {
  const {x, y, N} = action,
        newParticles = {},
        newParticleIds = new Array(N)

  for(let i = 0; i < N; i++) {
    let id = state.particleIndex + i,
        particle = { id, x, y }

    newParticleIds[i] = id

    particle.vector = [
      particle.id % 2 ? -randNormal() : randNormal(), // X-Velocity
      -randNormal2() * 3                              // Y-Velocity
    ]

    newParticles[particle.id] = particle
  }

  const newAllIds = state.allIds.concat(newParticleIds)

  return {
    ...state,
    allIds: newAllIds,
    all: {...state.all, ...newParticles},
    minParticleIndex: newAllIds[0],
    particleIndex: state.particleIndex + N + 1
  }
}
const moveParticles = (state, action) => {
  const {svgWidth, svgHeight, lastFrameTime} = action,
        multiplier = (Date.now() - lastFrameTime)/(1000/60),
        movedParticles = {},
        movedParticlesIds = []
  for(let i = state.minParticleIndex, l = state.particleIndex; i < l; i++) {
    if(
      state.all.hasOwnProperty(i) &&
      !(
        state.all[i].y > svgHeight ||
        state.all[i].x < 0 ||
        state.all[i].x > svgWidth
      )
    ) {
      movedParticlesIds[movedParticlesIds.length] = i
      movedParticles[i] = {
        x: state.all[i].x + state.all[i].vector[0] * multiplier,
        y: state.all[i].y + state.all[i].vector[1] * multiplier,
        vector: [
          state.all[i].vector[0],
          state.all[i].vector[1] + G * multiplier
        ]
      }
    }
  }

  return {
    ...state,
    allIds: movedParticlesIds,
    all: movedParticles
  }
}

const handlers = new Map()
handlers.set('particles.START_PARTICLES', startParticles)
        .set('particles.STOP_PARTICLES', stopParticles)
        .set('particles.CREATE_PARTICLES', createParticles)
        .set('ticker.TICK_TIME', moveParticles)

export default createReducer(initialState, handlers)
