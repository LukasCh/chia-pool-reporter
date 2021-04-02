module.exports = {
  extends: ["prettier", "plugin:prettier/recommended", "eslint:recommended"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
