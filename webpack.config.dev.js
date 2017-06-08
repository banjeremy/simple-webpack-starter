const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = "public";

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    contentBase: publicPath
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'})
  ]
}
