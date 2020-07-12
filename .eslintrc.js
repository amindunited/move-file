module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb-base", "prettier", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/extensions": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
  ignorePatterns: ["dist/**"],
};
