var merge = require('webpack-merge')
var common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    contentBase: './dist'
  }
});
