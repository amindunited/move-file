module.exports = {
  name: "my-project",
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx,ts}",
    "!./src/**/*index.{js,jsx,ts}",
    "!**/**e2e/**/*.{ts}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  testMatch: ["**.test.ts"],
};
