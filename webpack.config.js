const webpack = require('webpack');
const path = require('path');

const config = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
      ],
   },
   devServer: {
      static: {
         directory: './dist',
      },
      open: true,
   },
};

module.exports = config;
