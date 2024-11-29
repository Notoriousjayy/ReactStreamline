export default [
  {
    root: true,
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
    rules: {
      // Add or adjust rules here as needed
    },
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'], // Target TypeScript files
        rules: {
          '@typescript-eslint/no-explicit-any': 'warn' // Example: Warn for explicit `any` usage
        }
      }
    ]
  }
];
