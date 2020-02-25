import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import * as d3 from 'd3'

import { getSvgParticle } from '../selectors'

class SvgParticle extends Component {
  componentDidMount() {
    this.particle = d3.select(ReactDOM.findDOMNode(this))
  }

  componentDidUpdate() {
    this.particle
      .transition().duration(0.001)
      .attr('cx', p => this.props.x)
      .attr('cy', p => this.props.y)
  }

  render() {
    return (
      <circle
        ref={() => 'circle_' + this.props.id}
        r="2"
      />
    )
  }
}

function makeMapStateToProps() {
  return (state, props) => {
    return getSvgParticle(state, props)
  }
}

export default connect(makeMapStateToProps)(SvgParticle)
