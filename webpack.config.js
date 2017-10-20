var path = require("path");
var HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  entry: {
    app: './src/assets/js/main.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/assets/',
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
    ]
  },

  plugins: [
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "src", "*.handlebars"),
      output: path.join(process.cwd(), 'dist', '[name].html'),
      partials: [path.join(process.cwd(), 'src', 'components', '*.handlebars')]
    })
  ]

};
