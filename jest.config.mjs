const defaultConfig = {
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "text",
    "lcov",
  ],
  coverageThreshosd: {
    global: {
      branch: 100,
      funtions: 100,
      lines: 100,
      statements: 100,
    }
  },
  maxWorkers: "50%",
  watchPathIgnorePatterns: [
    "node_modules"
  ],
  transformIgnorePatterns: [
    "node_modules"
  ]
}

export default {
  projects: [{
    ...defaultConfig,
    testEnvironment: "node",
    displayName: "backend",
    collectCoverageFrom: [
      "server/",
      "!server/index.js",
    ],
    transformIgnorePatterns: [
      ...defaultConfig.transformIgnorePatterns,
      "public"
    ],
    testMatch: [
      "**/test/**/server/**/*.test.js"
    ]

  }]
}