const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '..', 'src'),
  entry: {
    main: './client.js',
    vendor: ['react', 'react-dom', 'react-router', 'react-helmet'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|jpe?g|png)$/i,
        use: {
          loader: 'file-loader',
          options: { emitFile: false },
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '..', 'src')],
  },
};
