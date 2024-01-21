import Ts from "rollup-plugin-typescript2"

const config = {
  input: [
    "src/index.ts",
    "src/atoms/Color/index.tsx",
    "src/atoms/Text/index.tsx",
  ],
  output: [
    {
      dir: "lib",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
    },
  ],
  plugins: [Ts()],
  external: ["react", "atomic-ds-react"],
}

export default config
