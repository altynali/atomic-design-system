import Ts from "rollup-plugin-typescript2"
// import terser from "@rollup/plugin-terser"

const config = {
  input: [
    "src/index.ts",
    "src/atoms/Color/index.ts",
    "src/atoms/Text/index.ts",
    "src/atoms/Margin/index.ts",
    "src/atoms/Button/index.ts",
    "src/atoms/Padding/index.ts",
    "src/atoms/Grid/index.ts",
    "src/atoms/Checkbox/index.ts",
    "src/molecules/Card/index.ts",
    "src/molecules/Select/index.ts",
    "src/molecules/Input/index.ts",
    "src/organisms/Form/index.ts",
    "src/templates/Layout/index.ts",
  ],
  output: [
    {
      dir: "lib",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
    },
  ],
  plugins: [Ts()], // terser()
  external: ["react"],
}

export default config
