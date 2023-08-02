module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@testing-library/jest-native/extend-expect',
  ],
  // moduleDirectories: ['node_modules', 'src', 'assets'],
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.jsx?$': './babel-jest.js',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!react-navigation|react-native|@react-native|@react-navigation|react-native-text-input-mask|axios)',
  ],
};
