module.exports = {
  projects: [
    // Classic Jest tests
    {
      preset: 'react-native',
      testMatch: ['**/__tests__/**/*.test.{js,ts,tsx}'],
    },
    // Harness tests
    {
      preset: 'react-native-harness',
      testMatch: ['**/__tests__/**/*.harness.{js,ts,tsx}'],
    },
  ],
};