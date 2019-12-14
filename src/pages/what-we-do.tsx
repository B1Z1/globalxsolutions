import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import TextOnBlack from '../components/TextOnBlack'
import { styleVariables } from '../shared/styles/variables'

import WrapperLayout from '../layouts/Wrapper'

const StyleP = styled.p`
  margin-bottom: 16px;
  span {
    transition: background-color 0.3s ease-in-out;
  }
  &:hover {
    span {
      background-color: ${styleVariables.colors.operate};
    }
  }
`

class WhatWeDoPage extends React.Component {
  render() {
    return (
      <WrapperLayout
        linkTo="/technologies"
        linkText="Technologie"
        title="Czym się zajmujemy"
        titleWithMargin={true}
        isDarkMode={false}
      >
        <SEO
          title="Czym się zajmujemy"
          description="Prowadzeniem prac projektowych w dziedzinie elektroniki (układy analogowe i cyfrowe, systemy wbudowane) i informatyki (aplikacje desktopowe, mobilne, chmurowe, webowe, systemy wykorzystujące metody sztucznej inteligencji i przetwarzania sygnałów)"
        />
        <StyleP>
          <TextOnBlack isDarkMode={false} withMargin={false}>
            Prowadzeniem
          </TextOnBlack>{' '}
          prac projektowych w dziedzinie elektroniki (układy analogowe i
          cyfrowe, systemy wbudowane) i informatyki (aplikacje desktopowe,
          mobilne, chmurowe, webowe, systemy wykorzystujące metody sztucznej
          inteligencji i przetwarzania sygnałów)
        </StyleP>
        <StyleP>
          <TextOnBlack isDarkMode={false} withMargin={false}>
            Poszukiwaniem
          </TextOnBlack>
          &nbsp;partnerów do realizacji projektów badawczo-rozwojowych i
          innowacyjnych.
        </StyleP>
        <StyleP>
          <TextOnBlack isDarkMode={false} withMargin={false}>
            Poszukiwaniem
          </TextOnBlack>{' '}
          i nawiązywaniem kontaktów z dostawcami lub odbiorcami innowacyjnej
          technologii.
        </StyleP>
        <StyleP>
          <TextOnBlack isDarkMode={false} withMargin={false}>
            Pomocą
          </TextOnBlack>{' '}
          w procesie przygotowania i przeprowadzenia negocjacji z dostawcą lub
          odbiorcą innowacyjnej technologii.
        </StyleP>
        <StyleP>
          <TextOnBlack isDarkMode={false} withMargin={false}>
            Doradztwem
          </TextOnBlack>{' '}
          w procesie przygotowania/weryfikacji i zawarcia umowy pomiędzy
          dostawcą i odbiorcą innowacyjnej technologii.
        </StyleP>
        <StyleP>
          <TextOnBlack isDarkMode={false} withMargin={false}>
            Pomocą
          </TextOnBlack>{' '}
          w opracowaniu dokumentacji funkcjonalnej/technicznej niezbędnej do
          wdrożenia innowacji.
        </StyleP>
        <StyleP>
          <TextOnBlack isDarkMode={false} withMargin={false}>
            Opracowaniem
          </TextOnBlack>{' '}
          strategii marketingowej dla wyrobu lub usługi będącej przedmiotem
          wdrożenia innowacyjnej technologii.
        </StyleP>
        <StyleP>
          <TextOnBlack isDarkMode={false} withMargin={false}>
            Opracowaniem
          </TextOnBlack>
          &nbsp;szczegółowego planu wdrożenia innowacji.
        </StyleP>
      </WrapperLayout>
    )
  }
}

export default WhatWeDoPage
