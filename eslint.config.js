module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Add custom rules here
  },
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'], // Adjust to lint all matching files
      excludedFiles: ['node_modules/**', 'dist/**'], // Explicitly exclude unwanted files
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
};
