const Fs = require("fs")
const Path = require("path")
const Sass = require("node-sass")

const getComponents = () => {
  let allComponents = []

  const types = ["atoms", "molecules", "organisms", "templates"]

  types.forEach((type) => {
    const allFiles = Fs.readdirSync(`src/${type}`).map((file) => ({
      input: `src/${type}/${file}`,
      output: `lib/${file.slice(0, -4) + "css"}`,
    }))

    allComponents = [...allComponents, ...allFiles]
  })

  return allComponents
}

const compile = (inputPath, outputPath) => {
  const result = Sass.renderSync({
    data: Fs.readFileSync(Path.resolve(inputPath)).toString(),
    outputStyle: "expanded",
    // outputStyle: "compressed",
    includePaths: [Path.resolve("src")],
  })

  Fs.writeFileSync(Path.resolve(outputPath), result.css.toString())
}

try {
  Fs.mkdirSync(Path.resolve("lib"))
} catch (e) {}

compile("src/global.scss", "lib/global.css")

getComponents().forEach((component) => {
  compile(component.input, component.output)
})
