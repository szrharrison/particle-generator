import React from 'react'
import { connect } from 'react-redux'

function Footer(props) {
  return (
    <div className='footer'>
      <p>Particles: {props.particles}</p>
    </div>
  )
}

const mapStateToProps = state => ({particles: state.particles.all.length})

export default connect(mapStateToProps)(Footer)
