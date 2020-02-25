import React from 'react'
import { connect } from 'react-redux'

import CanvasParticle from './CanvasParticle'

function CanvasParticles({particleIds}) {
  const l = particleIds.length,
        particleArray = new Array(l)
  for(let i = 0; i < l; i++) {
    particleArray[i] = (
      <CanvasParticle
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

const mapStateToProps = state => ({particleIds: state.canvasParticles.allIds})

export default connect(mapStateToProps)(CanvasParticles)
