const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'src'),
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'index.ejs',
      // Options
      appMountId: 'app',
      lang: 'en',
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { charset: 'utf-8' },
      ],
      title: '🤖 Dev Site',
    }),
  ],
});
