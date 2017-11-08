export function tickTime() {
  return function tickTime(dispatch, getState) {
    const {lastFrameTime} = getState().ticker,
          {height, width} = getState().svg

    dispatch({
      type: 'ticker.TICK_TIME',
      svgHeight: height,
      svgWidth: width,
      lastFrameTime
    })
  }
}

export function startTicker() {
  return {
    type: 'ticker.START_TICKER'
  }
}

export function stopTicker() {
  return function stopTicker(dispatch, getState) {
    function waitUntilNoParticles() {
      const particleNumber = getState().particles.allIds.length
      if(particleNumber > 0) {
        setTimeout(waitUntilNoParticles, 50)
      } else {
        dispatch({
          type: 'ticker.STOP_TICKER'
        })
      }
    }

    waitUntilNoParticles()
  }
}
