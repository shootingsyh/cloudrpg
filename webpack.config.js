var path = require('path');
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
    loaders: [{
      test: /\.jsx?$/, 
      loader: 'babel-loader' 
    },
    {
      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style-loader', 'css-loader'],
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }]
  }
};

module.exports = config;