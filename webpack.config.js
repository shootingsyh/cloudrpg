var path = require('path');
var fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-theme-vars.less'), 'utf8'));
var config = {
  entry: path.resolve(__dirname, 'client/App.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', 'css']
  },
  module: {
    rules: [{
      test: /\.jsx?$/, 
      use: [
       {loader: 'babel-loader'}
      ]
    },
    {
      test: /\.css$/,
      include: /node_modules/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.less$/,
      use: [
        {loader: "style-loader"},
        {loader: "css-loader"},
        {loader: "less-loader",
          options: {
            modifyVars: themeVariables
          }
        }
      ]
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
      use: [{loader: 'url-loader?limit=100000'}] }]
  }
};

module.exports = config;