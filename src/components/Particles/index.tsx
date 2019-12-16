import React, { createRef } from 'react'
import { styleVariables } from '../../shared/styles/variables'

import { StyleCanvas } from './style'

import { IPropsParticles } from './interface'

class Particles extends React.Component<IPropsParticles, {}> {
  private $CanvasRef = createRef<HTMLCanvasElement>()
  private canvas = null
  private ctx: CanvasRenderingContext2D | null
  private maxCircleRadius = 8
  private maxDistance = 100
  private circles = []
  private globalInterval = null

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (window) {
      this.startCanvas()
      window.addEventListener('resize', () => {
        this.startCanvas()
      })
    }
  }

  startCanvas() {
    clearInterval(this.globalInterval)
    const circle = {
      x: Math.floor((Math.random() * window.innerWidth) / 2),
      y: 300,
      direction: 'UP',
    }
    this.canvas = this.$CanvasRef.current
    this.canvas.width = window.innerWidth
    this.canvas.height = document.body.scrollHeight
    this.ctx = this.canvas.getContext('2d')
    this.circles.push(circle)

    this.globalInterval = setInterval(() => {
      this.createCircle()
    }, 3000)
  }

  generateCircleData(lastCircle) {
    const lastDirection = lastCircle.direction

    let x, y
    let ok = true
    let direction = null

    while (ok) {
      direction =
        Math.round(Math.random()) === 1
          ? Math.round(Math.random()) === 1
            ? 'LEFT'
            : 'RIGHT'
          : Math.round(Math.random()) === 1
          ? 'UP'
          : 'DOWN'
      if (direction !== lastDirection) ok = false
    }

    switch (direction) {
      case 'UP': {
        y = lastCircle.y + this.maxDistance
        x = lastCircle.x
        break
      }
      case 'DOWN': {
        y = lastCircle.y - this.maxDistance
        x = lastCircle.x
        break
      }
      case 'RIGHT': {
        y = lastCircle.y
        x = lastCircle.x + this.maxDistance
        break
      }
      case 'LEFT': {
        y = lastCircle.y
        x = lastCircle.x - this.maxDistance
        break
      }
    }

    return { x, y, direction }
  }

  createCircle() {
    const lastCircle = this.circles[this.circles.length - 1]
    const circle = this.generateCircleData(lastCircle)

    let circleStart = 0

    this.ctx.beginPath()
    this.ctx.strokeStyle = styleVariables.colors.operate
    this.ctx.moveTo(lastCircle.x, lastCircle.y)
    this.ctx.lineTo(circle.x, circle.y)
    this.ctx.stroke()

    const circleInterval = setInterval(() => {
      circleStart += 0.3

      if (circleStart <= this.maxCircleRadius) {
        this.ctx.beginPath()
        this.ctx.fillStyle = styleVariables.colors.operate
        this.ctx.arc(circle.x, circle.y, circleStart, 0, 2 * Math.PI)
        this.ctx.fill()
      } else {
        clearInterval(circleInterval)
        this.circles.push(circle)
      }
    }, 10)
  }

  render() {
    //@ts-ignore
    return <StyleCanvas ref={this.$CanvasRef}></StyleCanvas>
  }
}

export default Particles
