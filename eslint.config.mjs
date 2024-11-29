import { ESLint } from 'eslint';
import typescriptParser from '@typescript-eslint/parser'; // Import the TypeScript parser
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: [
      '**/node_modules/', // Ignore node_modules
      '**/dist/', // Ignore dist directory
      '**/build/' // Ignore build directory
    ]
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'], // Target source files
    languageOptions: {
      parser: typescriptParser, // Set the TypeScript parser
      parserOptions: {
        ecmaVersion: 2022, // Modern ECMAScript features
        sourceType: 'module', // Enable ES Modules
        ecmaFeatures: {
          jsx: true // Enable JSX
        }
      },
      globals: {
        ...ESLint.configGlobals // Include default globals
      }
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript, // TypeScript plugin
      react: eslintPluginReact // React plugin
    },
    rules: {
      // Recommended ESLint rules
      'react/prop-types': 'off', // Disable prop-types rule
      '@typescript-eslint/no-explicit-any': 'warn', // Warn on explicit `any` usage
      'react/jsx-uses-react': 'off', // No longer needed with React 17+
      'react/react-in-jsx-scope': 'off' // No longer needed with React 17+
    }
  }
];
