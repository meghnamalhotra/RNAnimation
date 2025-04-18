module.exports = {
  env: {
    node: true, // Tell ESLint it's a Node environment
    es2020: true, // Enable ES2020 syntax support
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    __DEV__: "readonly",  // Define __DEV__ as a read-only global variable
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-require-imports": "off", // Disable the rule
  }
};
