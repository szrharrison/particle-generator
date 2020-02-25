import { createSelector } from 'reselect'

export const getSvgParticle = (state, props) => state.svgParticles.all[props.id]
export const getCanvasParticle = (state, props) => state.canvasParticles.all[props.id]
export const getNumberOfSvgParticles = state => state.svgParticles.allIds.length
export const getNumberOfCanvasParticles = state => state.canvasParticles.allIds.length
export const getElapsedTime = state => (
  state.ticker.lastFrameTime - state.ticker.startTime + state.ticker.totalTime
) / 1000

export const getAllSvgParticles = state => state.svgParticles.allIds.map(
  pid => state.svgParticles.all[pid]
)

export const hasParticles = createSelector(
  [getNumberOfSvgParticles, getNumberOfCanvasParticles],
  (svg, canvas) => ((svg + canvas) > 0)
)

export function makeGetSvgParticle() {
  return createSelector(
    [getSvgParticle],
    particle => particle
  )
}

export function makeGetCanvasParticle() {
  return createSelector(
    [getCanvasParticle],
    particle => particle
  )
}
