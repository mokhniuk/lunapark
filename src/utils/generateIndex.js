
import fs from "fs"
import path from "path"

const componentsDir = "../components"
const indexFile = path.join(componentsDir, "index.ts")

fs.readdir(componentsDir, (err, files) => {
  if (err) throw err

  let exports = ""
  files.forEach(file => {
    if (file.startsWith("_") || file === "index.ts") {
      return
    }
    const componentName = file
    exports += `export { ${componentName} } from "./${componentName}/${componentName}"\n`
  })

  fs.writeFile(indexFile, exports, err => {
    if (err) throw err
    console.log("index of components has been generated")
  })
})