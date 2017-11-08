import React from 'react'
import { connect } from 'react-redux'

import { getElapsedTime } from '../selectors'

function Header(props) {
  return (
    <div className='header'>
      <div
        className='divider'
        style={{
          display: 'inline-block',
          width: '25%'
        }}
      >
        <p>Ticks: {props.ticks}</p>
        <p>Time: {props.time}s</p>
      </div>
      <div
        className='divider'
        style={{
          display: 'inline-block',
          width: '50%'
        }}
      >
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ticks: state.ticker.ticks,
  time: getElapsedTime(state)
})

export default connect(mapStateToProps)(Header)
