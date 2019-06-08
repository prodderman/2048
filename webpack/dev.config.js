const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isWatchMode = process.env.WATCH_MODE === 'true';

module.exports = {
  target: 'web',
  context: path.resolve(__dirname, '..', 'src'),
  devtool: 'source-map',
  entry: {
    app: 'index.js',
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '..', 'build'),
    filename: `js/[name]-[hash].bundle.js`,
    chunkFilename: `js/[name]-[hash].bundle.js`,
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.svelte'],
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            //hotReload: true,
          },
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
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
    ...isWatchMode ? [new webpack.HotModuleReplacementPlugin()] : [],
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'assets/index.html',
    }),
  ],
  devServer: {
    hot: isWatchMode,
    contentBase: path.resolve('..', 'build'),
    host: '0.0.0.0',
    port: 8080,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    disableHostCheck: true,
    stats: {
      colors: true,
      errors: true,
      errorDetails: true,
      warnings: true,
      assets: false,
      modules: false,
      warningsFilter: /export .* was not found in/,
    },
  },
};