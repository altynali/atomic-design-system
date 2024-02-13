import Ts from "rollup-plugin-typescript2"

const config = {
  input: [
    "src/index.ts",
    "src/atoms/Color/index.tsx",
    "src/atoms/Text/index.tsx",
    "src/atoms/Margin/index.ts",
    "src/atoms/Button/index.tsx",
    "src/molecules/Select/index.ts",
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
  external: ["react", "atomic-design-system-foundation"],
}

export default config
