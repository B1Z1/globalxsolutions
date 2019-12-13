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

  import WrapperLayout from '../layouts/Wrapper'

  class ${pageName}Page extends React.Component {
    render() {
      return (
        <WrapperLayout
          linkTo="/${pageName.toLowerCase()}"
          linkText=""
          title=""
          titleWithMargin={false}
          isDarkMode={false}
        >
          <SEO title="" />
        </WrapperLayout>
      )
    }
  }
  
  export default ${pageName}Page
  `

  generateFile(filePath, pageName, pageContent)
}
