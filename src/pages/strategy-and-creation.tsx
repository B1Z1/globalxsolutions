import React from 'react'

import SEO from '../components/seo'
import TextOnBlack from '../components/TextOnBlack'

import MainLayout from '../layouts/Main'

import { StyleListElementWithDots } from '../shared/styles/components/List'

class StrategyAndCreation extends React.Component {
  render() {
    return (
      <MainLayout
        linkTo="/team"
        linkText="Zespół"
        title="Strategia i Kreacja"
        titleWithMargin={true}
      >
        <SEO title="Strategia i kreacja" />
        <p>
          <TextOnBlack withMargin={false}>Wszelkie</TextOnBlack> działania,
          dobór narzędzi, marketing, mają swoje poparcie w strategii. Podczas
          etapu kreacji tworzymy unikalne widoki, które następnie w ramach
          implementacji stają się w pełni interaktywnym i gotowym projektem.
        </p>
        <h4 style={{ marginBottom: '16px' }}>
          <TextOnBlack withMargin={false}>
            Pomożemy zaprojektować Ci:
          </TextOnBlack>
        </h4>
        <ul>
          <StyleListElementWithDots>Strategię marki</StyleListElementWithDots>
          <StyleListElementWithDots>
            Strategię komunikacji
          </StyleListElementWithDots>
          <StyleListElementWithDots>
            Architekturę informacji
          </StyleListElementWithDots>
          <StyleListElementWithDots>
            Scenariusze użycia i interaktywny prototyp UX
          </StyleListElementWithDots>
          <StyleListElementWithDots>
            Strategię wizualną
          </StyleListElementWithDots>
        </ul>
      </MainLayout>
    )
  }
}

export default StrategyAndCreation
