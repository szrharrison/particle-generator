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
