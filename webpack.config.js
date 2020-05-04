const path = require('path');

module.exports = {
 mode: 'development',
 entry: {
  home: './src/js/home.js',
  general: './src/js/general.js',
  about: './src/js/about.js',
  status: './src/js/status.js'
 },
 output: {
  path: path.join(__dirname, 'public'),
  filename: '[name].js'
 },
 module: {
  rules: [{
   loader: 'babel-loader',
   test: /\.js$/,
   exclude: /node_modules/
  },
  {
   test:/\.css$/,
   use: [
    {
     loader: 'style-loader'
    },
    {
     loader:'css-loader',   
     options: {sourceMap: true}  
    }
   ]
  }
 ]
 },
 devServer:{
  contentBase:path.join(__dirname, 'public')
 },
 devtool:'source-map'
}