export default [
  {
    ignores: [
      '**/node_modules/',
      '**/dist/',
      '**/build/',
      // Add other patterns to ignore as needed
    ],
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'], // Specify files to lint
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off', // Example rule
    },
  },
];
