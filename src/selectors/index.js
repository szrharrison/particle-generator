import { createSelector } from 'reselect'

export const getParticle = (state, props) => state.particles.all[props.id]
export const getNumberOfParticles = state => state.particles.allIds.length
export const getElapsedTime = state => (
  state.ticker.lastFrameTime - state.ticker.startTime + state.ticker.totalTime
) / 1000


export function makeGetParticle() {
  return createSelector(
    [getParticle],
    particle => particle
  )
}
