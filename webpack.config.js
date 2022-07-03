const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: './src/popup.js',
    background: './src/background.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'extension'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/images', to: 'images' },
        { from: './src/manifest.json' },
        { from: './src/popup.html' },
      ],
    }),
  ],
};
