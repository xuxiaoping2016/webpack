const path = require('path');
 const {CleanWebpackPlugin} = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js',
     another: './src/another-module.js'
   },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Production'
     })
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
   },
   module:{
    rules:[
        {
            'use': 'babel-loader',
            'test': /\.js$/,
            'exclude': /node_modules/,
            'options': {
              'plugins': ['lodash'],
              'presets': [['env', { 'modules': false, 'targets': { 'node': 4 } }]]
            }
        }
      ]
  },
  plugins: [
    new LodashModuleReplacementPlugin()
  ]

 };