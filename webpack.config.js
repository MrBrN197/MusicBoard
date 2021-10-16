/* eslint-disable */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/template.html',
    }),
    new FaviconsWebpackPlugin('./src/assets/images/logo.png'),
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
      
      {
        test: /\.(gif|png|jpe?g)$/,
        type: 'asset/resource',
      },
      
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    watchFiles: 'src/**/*',
    static: './dist',
  },
};