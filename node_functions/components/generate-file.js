const fs = require('fs')

function generateFile(folderPath, fileName, content) {
  fs.writeFile(
    `${folderPath}/${fileName.toLowerCase()}.tsx`,
    content,
    error => {
      if (error) console.log(`Error: ${error}`)
      else console.log('Component is Created')
    }
  )
}

module.exports = {
  generateFile,
}
