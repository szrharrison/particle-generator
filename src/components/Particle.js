import React from 'react'
import { connect } from 'react-redux'

function Particle(props) {
  console.log(props)
  return (
    <circle cx={props.x} cy={props.y} r="2" />
  )
}

export default connect()(Particle)
