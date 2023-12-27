module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      "fs": false,
      "os": false,
      "path": require.resolve("path-browserify")
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  }
};
