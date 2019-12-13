import React from 'react'

import SEO from '../components/seo'
import TextOnBlack from '../components/TextOnBlack'

import WrapperLayout from '../layouts/Wrapper'

import { StyleListElementWithDots } from '../shared/styles/components/List'

class StrategyAndCreation extends React.Component {
  render() {
    return (
      <WrapperLayout
        linkTo="/team"
        linkText="Zespół"
        title="Strategia i Kreacja"
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO title="Strategia i kreacja" />
        <p>
          <TextOnBlack isDarkMode={false} withMargin={false}>
            Wszelkie
          </TextOnBlack>{' '}
          działania, dobór narzędzi, marketing, mają swoje poparcie w strategii.
          Podczas etapu kreacji tworzymy unikalne widoki, które następnie w
          ramach implementacji stają się w pełni interaktywnym i gotowym
          projektem.
        </p>
        <h4 style={{ marginBottom: '16px' }}>
          <TextOnBlack isDarkMode={false} withMargin={false}>
            Pomożemy zaprojektować Ci:
          </TextOnBlack>
        </h4>
        <ul>
          <StyleListElementWithDots dotPosition="center">
            Strategię marki
          </StyleListElementWithDots>
          <StyleListElementWithDots dotPosition="center">
            Strategię komunikacji
          </StyleListElementWithDots>
          <StyleListElementWithDots dotPosition="center">
            Architekturę informacji
          </StyleListElementWithDots>
          <StyleListElementWithDots dotPosition="center">
            Scenariusze użycia i interaktywny prototyp UX
          </StyleListElementWithDots>
          <StyleListElementWithDots dotPosition="center">
            Strategię wizualną
          </StyleListElementWithDots>
        </ul>
      </WrapperLayout>
    )
  }
}

export default StrategyAndCreation
