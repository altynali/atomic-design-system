/** @type {import('jest').Config} */

const config = {
  verbose: true,
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/**/*.{js,ts, tsx}"],
  roots: ["<rootDir>/src"],
}

module.exports = config
