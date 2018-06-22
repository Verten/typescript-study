module.exports = {
  mode: 'development',
  entry: __dirname + '/src/math.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
}
