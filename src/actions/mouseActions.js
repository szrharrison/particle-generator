export function updateMousePos(x, y) {
  return {
    type: 'mouse.UPDATE_POSITION',
    x,
    y
  }
}
