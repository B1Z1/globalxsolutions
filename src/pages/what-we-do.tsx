import React from 'react'

/**
 * Import Components
 */
import SEO from '../components/seo'
import TextOnBlack from '../components/TextOnBlack'

/**
 * Import Layouts
 */
import MainLayout from '../layouts/Main'

class WhatWeDoPage extends React.Component {
  render() {
    return (
      <MainLayout
        linkTo="/what-we-do"
        linkText="Technologie"
        title="Czym się zajmujemy"
        titleWithMargin={true}
      >
        <SEO title="Technologie" />
        <div>
          <TextOnBlack withMargin={true}>Czym się zajmujemy</TextOnBlack>
          <p>
            Prowadzeniem prac projektowych w dziedzinie elektroniki (układy
            analogowe i cyfrowe, systemy wbudowane) i informatyki (aplikacje
            desktopowe, mobilne, chmurowe, webowe, systemy wykorzystujące metody
            sztucznej inteligencji i przetwarzania sygnałów)
          </p>
        </div>
        <div>
          <TextOnBlack withMargin={true}>Czym się zajmujemy</TextOnBlack>
          <p>
            Prowadzeniem prac projektowych w dziedzinie elektroniki (układy
            analogowe i cyfrowe, systemy wbudowane) i informatyki (aplikacje
            desktopowe, mobilne, chmurowe, webowe, systemy wykorzystujące metody
            sztucznej inteligencji i przetwarzania sygnałów)
          </p>
        </div>
      </MainLayout>
    )
  }
}

export default WhatWeDoPage
