const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
  },
};