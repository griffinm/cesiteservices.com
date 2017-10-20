var path = require("path");
var HandlebarsPlugin = require("handlebars-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/assets/js/main.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/[name].[hash:7].js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.handlebars$/, loader: 'handlebars-loader' }
    ]
  },

  plugins: [
    // new HandlebarsPlugin({
    //   entry: path.join(process.cwd(), "src", "*.handlebars"),
    //   output: path.join(process.cwd(), 'dist', '[name].html'),
    //   partials: [path.join(process.cwd(), 'src', 'components', '*.handlebars')]
    // }),
    new HtmlWebpackPlugin({
      template: '!!handlebars-loader!src/index.handlebars'
    })
  ]

};
