const globals = require("globals");
const pluginJs = require("@eslint/js");
const tsEslintPlugin = require("@typescript-eslint/eslint-plugin");
const tsEslintParser = require("@typescript-eslint/parser");
const pluginReactConfig = require("eslint-plugin-react/configs/recommended.js");
const nextPlugin = require("@next/eslint-plugin-next");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: "module",
        project: ["./tsconfig.json"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
      },
    },
    extends: [
      pluginJs.configs.recommended,
      tsEslintPlugin.configs.recommended,
      pluginReactConfig,
      "plugin:@next/next/recommended",
      prettierConfig,
    ],
    plugins: {
      "@next/next": nextPlugin,
      "@typescript-eslint": tsEslintPlugin,
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "react/react-in-jsx-scope": "off", // Not needed with Next.js 13+
      "react/no-unescaped-entities": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
