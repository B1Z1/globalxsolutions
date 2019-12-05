import React from 'react'

import SEO from '../components/seo'
import Title from '../components/Title'

import MainLayout from '../layouts/Main'

const WhatWeDoPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <Title>Stawiamy na wiedzę i doświadczenie, ale</Title>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </MainLayout>
)

export default WhatWeDoPage
