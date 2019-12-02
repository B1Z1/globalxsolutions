import React from 'react'

import SEO from '../components/seo'

import MainLayout from '../layouts/Main'

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </MainLayout>
)

export default IndexPage
