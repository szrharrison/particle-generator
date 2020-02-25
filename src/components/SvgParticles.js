import React from 'react'
import { connect } from 'react-redux'

import SvgParticle from './SvgParticle'

function SvgParticles({particleIds}) {
  const l = particleIds.length,
        particleArray = new Array(l)
  for(let i = 0; i < l; i++) {
    particleArray[i] = (
      <SvgParticle
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

const mapStateToProps = state => ({particleIds: state.svgParticles.allIds})

export default connect(mapStateToProps)(SvgParticles)
