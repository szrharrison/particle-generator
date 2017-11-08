import React from 'react'
import { connect } from 'react-redux'

import { getParticle } from '../selectors'

function Particle(props) {
  return (
    <circle cx={props.x} cy={props.y} r="2"/>
  )
}

function makeMapStateToProps() {
  return (state, props) => {
    const {x, y} = getParticle(state, props)
    return {
      x,
      y
    }
  }
}

export default connect(makeMapStateToProps)(Particle)
