import React from 'react'
import { connect } from 'react-redux'

import { getNumberOfParticles } from '../selectors'

function Footer(props) {
  return (
    <div className='footer'>
      <p>Particles: {props.particles}</p>
    </div>
  )
}

const mapStateToProps = state => ({particles: getNumberOfParticles(state)})

export default connect(mapStateToProps)(Footer)
