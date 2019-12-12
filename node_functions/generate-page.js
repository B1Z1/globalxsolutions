const fs = require('fs')
const generateFile = require('./components/generate-file').generateFile

const pageName = process.argv[2]
const filePath = `${process.cwd()}/src/pages`
if (pageName === undefined) {
  console.error('Please write a page name')
} else if (fs.existsSync(`${filePath}/${pageName}.tsx`)) {
  console.error('File is exist')
} else {
  const pageContent = `import React from 'react'
  import styled from 'styled-components'
  
  import SEO from '../components/seo'

  import MainLayout from '../layouts/Main'

  class ${pageName}Page extends React.Component {
    render() {
      return (
        <MainLayout
          linkTo="/${pageName}"
          linkText=""
          title=""
          titleWithMargin={false}
          isDarkMode={false}
        >
          <SEO title="" />
        </MainLayout>
      )
    }
  }
  
  export default ${pageName}
  `

  generateFile(filePath, pageName, pageContent)
}
