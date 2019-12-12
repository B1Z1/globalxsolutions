const fs = require('fs')

function generateFolder(folderName) {
  fs.mkdirSync(
    `${process.cwd()}/src/components/${folderName}`,
    { recursive: true },
    error => {
      if (error) console.log(`Error: ${error}`)
      console.log('Work')
    }
  )
}

module.exports = {
  generateFolder,
}
