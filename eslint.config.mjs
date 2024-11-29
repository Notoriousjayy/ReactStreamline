export default [
  {
    parser: '@typescript-eslint/parser', // Use TypeScript parser
    plugins: ['@typescript-eslint', 'react'], // Enable React and TypeScript linting
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2022, // Support modern JavaScript
      sourceType: 'module', // Enable ES Modules
      ecmaFeatures: {
        jsx: true // Enable JSX parsing
      }
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the React version
      }
    },
    ignores: [
      '**/node_modules/', // Ignore node_modules globally
      '**/dist/', // Ignore dist directory globally
      '**/build/' // Ignore build directory globally
    ],
    files: ['src/**/*.{js,jsx,ts,tsx}'], // Include all relevant files in src
    rules: {
      // Example: Customize rules as needed
      'react/prop-types': 'off', // Disable prop-types rule
      '@typescript-eslint/no-explicit-any': 'warn' // Warn on explicit `any` usage
    },
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'], // Specific rules for TypeScript files
        rules: {
          '@typescript-eslint/explicit-function-return-type': 'off' // Example: Turn off explicit return types
        }
      }
    ]
  }
];
