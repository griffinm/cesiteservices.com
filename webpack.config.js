var path = require("path");
var HandlebarsPlugin = require("handlebars-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/assets/js/main.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:7].js'
  },

  module: {
    loaders: [
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '/assets/img/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: '!!handlebars-loader!src/index.handlebars'
    }),
    new CopyWebpackPlugin([{
      from: './src/assets/img/',
      to: 'assets/img/',
      copyUnmodified: true
    }])
  ]

};
