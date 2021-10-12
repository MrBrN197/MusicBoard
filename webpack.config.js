/* eslint-disable */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: 'src/**/*',
    static: './dist',
  },
};