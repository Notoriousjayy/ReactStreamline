export default {
  testEnvironment: "jest-environment-jsdom", // Specify test environment
  transform: {
    "^.+\\.(ts|tsx|js|jsx|mjs)$": "babel-jest" // Add support for .mjs files
  },
  extensionsToTreatAsEsm: [".ts", ".tsx", ".mjs"], // Treat .mjs as ESM
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "mjs", "json", "node"], // Add .mjs
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js" // Mock CSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.mjs"] // Additional setup for Jest
};
