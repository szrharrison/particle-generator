export function createParticles(x, y, N) {
  return {
    type: 'particles.CREATE_PARTICLES',
    x,
    y,
    N
  }
}

export function maybeCreateParticles() {
  return (dispatch, getState) => {
    const [x, y] = getState().mouse.position,
          {rate: N, particlesStarted: started} = getState().particles

    if(started) {
      dispatch(createParticles(x, y, N))
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
