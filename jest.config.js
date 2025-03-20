module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json'
    }],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov', 'text']
  },
  testMatch: ['**/*.test.ts'],
  moduleDirectories: ['node_modules', '<rootDir>']
};