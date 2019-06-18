const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  mode: 'production',
  context: path.resolve(__dirname, '..', 'src'),
  entry: {
    app: 'index.js',
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '..', 'build'),
    filename: `js/[name]-[chunkhash].bundle.js`,
    chunkFilename: `js/[id]-[chunkhash].bundle.js`,
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.mjs', '.js', '.svelte'],
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'svelte-loader',
            options: {
              emitCss: true,
            },
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader?name=fonts/[hash].[ext]',
      },
      {
        test: /\.(png|svg)/,
        loader: 'url-loader',
        options: {
          name: 'images/[name].[ext]',
          limit: 10000,
        },
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/[name].[chunkhash].css`,
      chunkFilename: `css/[id].[chunkhash].css`,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'assets/index.html',
    }),
  ],
};