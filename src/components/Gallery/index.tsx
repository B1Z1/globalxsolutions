import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { IPropsGallery, IStateGallery } from './interface'
import {
  StyleImageWrapper,
  StyleWrapper,
  StyleShowWrapper,
  StyleIShowImageWrapper,
} from './style'

class Gallery extends React.Component<IPropsGallery, IStateGallery> {
  showWrapperRef = null

  constructor(props) {
    super(props)

    this.state = {
      currentID: null,
      currentFluid: null,
      currentAlt: '',
      animation: 'start',
    }

    this.showWrapperRef = React.createRef()
  }

  handleImageClick(index) {
    const clickedElement = this.props.elements[index]

    this.setState({
      currentAlt: clickedElement.alt,
      currentFluid: clickedElement.fluid,
      currentID: index,
    })
  }

  handleShowWrapperClick(ev) {
    const { target } = ev
    if (target === this.showWrapperRef.current) {
      this.setState({
        animation: 'end',
      })
      setTimeout(() => {
        this.setState({
          currentAlt: '',
          currentFluid: null,
          currentID: null,
          animation: 'start',
        })
      }, 300)
    }
  }

  render() {
    const { elements } = this.props
    const { currentFluid, currentAlt, animation } = this.state
    let $ShowImg = null

    if (currentFluid !== null && currentAlt !== '') {
      console.log(animation)
      $ShowImg = (
        <StyleShowWrapper
          ref={this.showWrapperRef}
          onClick={ev => {
            this.handleShowWrapperClick(ev)
          }}
        >
          <StyleIShowImageWrapper animation={animation}>
            <Img
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              fluid={currentFluid}
              alt={currentAlt}
            />
          </StyleIShowImageWrapper>
        </StyleShowWrapper>
      )
    }

    const $Images = elements.map((el, index) => {
      const { alt, fluid } = el
      let type = index % 4 === 0 ? 'lg' : 'sm'

      return (
        <StyleImageWrapper
          onClick={() => {
            this.handleImageClick(index)
          }}
          key={index}
          type={type}
        >
          <Img fluid={fluid} alt={alt} objectPosition="50% 50%" />
        </StyleImageWrapper>
      )
    })

    return (
      <div>
        {$ShowImg}
        <StyleWrapper>{$Images}</StyleWrapper>
      </div>
    )
  }
}

export default Gallery
