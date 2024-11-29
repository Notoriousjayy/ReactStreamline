import { ESLint } from 'eslint';

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
      parser: '@typescript-eslint/parser', // Set the TypeScript parser
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
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'), // TypeScript plugin
      react: require('eslint-plugin-react') // React plugin
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
