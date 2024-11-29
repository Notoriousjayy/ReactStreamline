export default {
  testEnvironment: "jest-environment-jsdom", // Specify test environment
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest" // Use Babel for transformation
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"], // Supported extensions
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js" // Mock CSS imports
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"] // Additional setup for Jest
};
