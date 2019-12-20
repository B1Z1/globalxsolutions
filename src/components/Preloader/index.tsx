import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { IPropsPreloader, IStatePreloader } from './interface'
import {
  StyleWrapper,
  StyleSlide,
  StyleLogoWrapper,
  StyleSlidesWrapper,
} from './style'

class Preloader extends React.Component<IPropsPreloader, IStatePreloader> {
  constructor(props) {
    super(props)

    this.state = {
      slides: [false, true, true],
      isDone: false,
      activeSlidesWrapper: false,
    }
  }

  componentDidMount() {
    if (sessionStorage.getItem('preload')) {
      this.setState({
        isDone: true,
      })
    } else {
      this.setState({
        activeSlidesWrapper: true,
      })
      let i = 0
      let interval = setInterval(() => {
        if (i >= 2) {
          this.setState({
            isDone: true,
          })
          clearInterval(interval)
          sessionStorage.setItem('preload', 'true')
        }
        this.changeSlide(i + 1, i)
        i++
      }, 3000)
    }
  }

  changeSlide(on: number, off: number) {
    const { slides } = this.state
    slides[off] = true
    slides[on] = false
    this.setState({
      slides: slides,
    })
  }

  render() {
    const { globalXLogo, parpLogo, infotechLogo } = this.props.data
    const { slides, isDone, activeSlidesWrapper } = this.state

    return (
      <StyleWrapper isDone={isDone}>
        <StyleSlidesWrapper activeSlidesWrapper={activeSlidesWrapper}>
          <StyleSlide hidden={slides[0]}>
            <StyleLogoWrapper>
              <Img
                fluid={globalXLogo.childImageSharp.fluid}
                alt="GlobalXSolutions Logo"
              />
            </StyleLogoWrapper>
            <p>
              Rozwiązuj wyzwania technologiczne dzięki <br /> drużynie Global X
              Solutions.
            </p>
          </StyleSlide>
          <StyleSlide hidden={slides[1]}>
            <p>Dziękujemy za wsparcie</p>
            <StyleLogoWrapper sizeLogo="lg">
              <Img fluid={parpLogo.childImageSharp.fluid} alt="PARP Logo" />
            </StyleLogoWrapper>
          </StyleSlide>
          <StyleSlide hidden={slides[2]}>
            <StyleLogoWrapper sizeLogo="md">
              <Img
                fluid={infotechLogo.childImageSharp.fluid}
                alt="Infotech Logo"
              />
            </StyleLogoWrapper>
            <p style={{ marginBottom: 8, marginTop: 8 }}>
              Global X Solutions jest członkiem European Commission AI Alliance
            </p>
            <p style={{ marginBottom: 8, marginTop: 8 }}>
              Global X Solutions jest dumnym członkiem Klastra Technologicznego
              Infotech
            </p>
            <p>
              Global X Solutions Sp. z.o.o. jest zarejestrowany w bazie danych
              Bisnode (współpraca z Dun & Bradstreet) pod numerem D-U-N-S®:
              539321172
            </p>
          </StyleSlide>
        </StyleSlidesWrapper>
      </StyleWrapper>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query PreloaderQuery {
        globalXLogo: file(
          relativePath: { eq: "Logos/GlobalXSolutionsBigger.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 460, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        parpLogo: file(relativePath: { eq: "Logos/Parp.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 460, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        infotechLogo: file(relativePath: { eq: "infotech.png" }) {
          childImageSharp {
            fluid(maxWidth: 462, pngQuality: 100, fit: CONTAIN) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Preloader data={data} {...props} />}
  />
)
