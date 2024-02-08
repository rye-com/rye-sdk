module.exports = {
  env: {
    browser: true, // Enables global variables available in browsers
    node: true, // Enables global variables available in Node.js
    es2021: true, // Indicates that your code is intended to use ES2021 features
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["simple-import-sort", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    "consistent-return": "error",
    // https://eslint.org/docs/latest/rules/no-template-curly-in-string
    "no-template-curly-in-string": "warn",
    camelcase: [
      "warn",
      {
        ignoreImports: true,
        properties: "never",
      },
    ],
    "func-style": ["warn", "declaration"],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          ["^node:"],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ["^@?\\w"],
          // Rye packages
          ["^@rye?\\w"],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ["^"],
          // Relative imports.
          // Anything that starts with a dot.
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
