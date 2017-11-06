import React from 'react'
import { connect } from 'react-redux'

import Particle from './Particle'

function Particles({particles}) {
  const l = particles.length,
        particleArray = new Array(l)
  for(let i = 0; i < l; i++) {
    particleArray[i] = (
      <Particle
        {...particles[i]}
      />
    )
  }
  return (
    <g>
      {particleArray}
    </g>
  )
}

const mapStateToProps = state => ({particles: state.particles.all})

export default connect(mapStateToProps)(Particles)
