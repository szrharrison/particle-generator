export function updateMousePos(x, y) {
  console.log('x:', x)
  console.log('y:', y)
  return {
    type: 'mouse.UPDATE_POSITION',
    x,
    y
  }
}
