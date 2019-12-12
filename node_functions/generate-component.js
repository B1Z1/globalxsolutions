const fs = require('fs')
const generateFolder = require('./components/generate-folder').generateFolder
const generateFile = require('./components/generate-file').generateFile

const folderName = process.argv[2]
const folderPath = `${process.cwd()}/src/components/${folderName}`

if (folderName === undefined) {
  console.error('Please write a component name')
} else if (fs.existsSync(folderPath)) {
  console.error('Folder is exist')
} else {
  const indexContent = `import React from 'react'
  import { IProps${folderName} } from './interface'
  import {} from './style'
  
  class ${folderName} extends React.Component<IProps${folderName}, {}> {
    render() {
      return <div></div>
    }
  }
  
  export default ${folderName}
  `

  const styleContent = `import styled from 'styled-components'
  
  export {}
  `

  const interfaceContent = `interface IProps${folderName} {
  
  }
  
  export { IProps${folderName} }
  `

  generateFolder(folderName)
  generateFile(folderPath, 'index', indexContent)
  generateFile(folderPath, 'style', styleContent)
  generateFile(folderPath, 'interface', interfaceContent)
}
