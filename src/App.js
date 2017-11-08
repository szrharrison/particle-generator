import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3'

import './App.css'

import { tickTime, startTicker, stopTicker } from './actions/tickerActions'
import { startParticles, stopParticles, maybeCreateParticles } from './actions/particlesActions'
import { updateMousePos } from './actions/mouseActions'
import { getNumberOfParticles } from './selectors'

import Particles from './components/Particles'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)

    this.updateMousePos = this.updateMousePos.bind(this)
    this.updateTouchPos = this.updateTouchPos.bind(this)
  }

  componentDidMount() {
    let svg = d3.select(this.refs.svg)

    svg.on('mousedown', () => {
      this.startTicker()
      this.updateMousePos()
      this.props.startParticles()
    })
    svg.on('touchstart', () => {
      this.startTicker()
      this.updateTouchPos()
      this.props.startParticles()
    })
    svg.on('mousemove', this.updateMousePos)
    svg.on('touchmove', this.updateTouchPos)
    svg.on('mouseup', () => {
      this.props.stopParticles()
      this.props.stopTicker()
    })
    svg.on('touchend', () => {
      this.props.stopParticles()
      this.props.stopTicker()
    })
    svg.on('mouseleave', () => {
      this.props.stopParticles()
      this.props.stopTicker()
    })
  }

  updateMousePos() {
      let [x, y] = d3.mouse(this.refs.svg)
      this.props.updateMousePos(x, y)
  }

  updateTouchPos() {
      let [x, y] = d3.touches(this.refs.svg)[0]
      this.props.updateMousePos(x, y)
  }

  startTicker() {
    const ticker = () => {
      if(this.props.tickerStarted) {
        this.props.maybeCreateParticles()
      }
      if(this.props.particleNumber > 0) {
        this.props.tickTime()
      }

      window.requestAnimationFrame(ticker)
    }

    if(!this.props.tickerStarted) {
      this.props.startTicker()
      ticker()
    }
  }

  render() {
    return (
      <div
        style={{overflow: 'hidden'}}
      >
        <Header/>
        <svg
          width={this.props.svgWidth}
          height={this.props.svgHeight}
          ref="svg"
          style={{background: 'rgba(124, 224, 249, .3)'}}
        >
          <Particles/>
        </svg>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tickerStarted: state.ticker.started,
    svgWidth: state.svg.width,
    svgHeight: state.svg.height,
    particleNumber: getNumberOfParticles(state)
  }
}
export default connect(mapStateToProps, {
  tickTime,
  startTicker,
  stopTicker,
  startParticles,
  stopParticles,
  updateMousePos,
  maybeCreateParticles
})(App)
