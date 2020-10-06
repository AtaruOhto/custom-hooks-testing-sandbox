module.exports = {
  moduleFileExtensions: ["ts", "tsx"],
  transform: {
    ".+\\.tsx?$": "babel-jest"
  },
  testMatch: ["**/*.(spec).(ts|tsx)"],
  coveragePathIgnorePatterns: ["/node_modules/"]
};
