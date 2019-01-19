const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  devServer: {
    hot: true,
    publicPath: "/",
    historyApiFallback: true
  },
  
  module: {
    rules: [
      {
        test: /\.scss$/,
        use:  [  process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(__dirname, './index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    })
  ],
} 