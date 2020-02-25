import React from 'react'
import { connect } from 'react-redux'

import { getNumberOfSvgParticles } from '../selectors'

function Footer(props) {
  return (
    <div className='footer'>
      <p>Particles: {props.particles}</p>
    </div>
  )
}

const mapStateToProps = state => ({particles: getNumberOfSvgParticles(state)})

export default connect(mapStateToProps)(Footer)
