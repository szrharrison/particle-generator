export function createParticles(x, y, N) {
  return {
    type: 'particles.CREATE_PARTICLES',
    x,
    y,
    N
  }
}

export function maybeCreateSvgParticles() {
  return (dispatch, getState) => {
    const [x, y] = getState().mouse.position,
          {particlesStarted} = getState().svgParticles

    if(particlesStarted) {
      dispatch(createParticles(x, y))
    }
  }
}

export function startParticles() {
  return {
    type: 'particles.START_PARTICLES'
  }
}

export function stopParticles() {
  return {
    type: 'particles.STOP_PARTICLES'
  }
}
