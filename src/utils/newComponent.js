
import fs from "fs"
import path from "path"
import promptSync from "prompt-sync"

const prompt = promptSync()
const componentName = prompt("Please enter a component name: ")
const componentsDir = "../components"
const newComponentDir = path.join(componentsDir, componentName)

// Create component directory
if (!fs.existsSync(newComponentDir)) {
  fs.mkdirSync(newComponentDir)
}

// Create ComponentName.tsx
fs.writeFileSync(path.join(newComponentDir, `${componentName}.tsx`),
  `import React from "react"

export const ${componentName} = () => {
  return (
    <div>
      <h1>${componentName}</h1>
    </div>
  )
}

export default ${componentName}
`)

// Create ComponentName.stories.tsx
fs.writeFileSync(
  path.join(newComponentDir, `${componentName}.stories.tsx`),
  `import React from "react"
import { ${componentName} } from "./${componentName}"

export default {
  title: "${componentName}",
  component: ${componentName},
}

export const Primary = () => <${componentName} />
`)

// Create componentName.module.scss
fs.writeFileSync(
  path.join(newComponentDir, `${componentName.toLowerCase()}.module.scss`),
  `.${componentName.toLowerCase()} {
  /* Styles go here */
}
`)

// Create ComponentName.test.ts
fs.writeFileSync(
  path.join(newComponentDir, `${componentName}.test.ts`),
  `import React from "react"
import { render } from "@testing-library/react"
import ${componentName} from "./${componentName}"

test("renders learn react link", () => {
  const { getByText } = render(<${componentName} />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
`)

// Create readme.md
fs.writeFileSync(
  path.join(newComponentDir, "readme.md"),
  `# ${componentName}

This is the ${componentName} component.
`)