import React from 'react'
import { connect } from 'react-redux'

import Particle from './Particle'

function Particles({particleIds}) {
  const l = particleIds.length,
        particleArray = new Array(l)
  for(let i = 0; i < l; i++) {
    particleArray[i] = (
      <Particle
        key={particleIds[i]}
        id={particleIds[i]}
      />
    )
  }
  return (
    <g>
      {particleArray}
    </g>
  )
}

const mapStateToProps = state => ({particleIds: state.particles.allIds})

export default connect(mapStateToProps)(Particles)
