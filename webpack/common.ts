import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

import pkg from '../package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
const isWatchMode = process.env.WATCH_MODE === 'true';
const forGHPages = process.env.FOR_GH_PAGES === 'true';

const chunkName = isProduction ? 'id' : 'name';
const chunkHash = isWatchMode && !isProduction ? 'hash' : 'chunkhash';
const withHot = isWatchMode && isDevelopment;

export type BuildType = 'dev' | 'prod';

const threadLoader: webpack.Loader[] = (() => {
  if (process.env.THREADED === 'true') {
    const workerPool = {
      workers: require('os').cpus().length - 1,
      poolTimeout: withHot ? Infinity : 2000,
    };
    return [{ loader: 'thread-loader', options: workerPool }];
  }
  return [];
})();

export const getCommonPlugins: (type: BuildType) => webpack.Plugin[] = (type) => [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: `css/[name].[${chunkHash}].css`,
    chunkFilename: `css/[id].[${chunkHash}].css`,
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'assets/index.html',
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV_MODE': JSON.stringify(process.env.NODE_ENV_MODE),
  }),
  ...withHot && type !== 'prod' ? [new webpack.HotModuleReplacementPlugin()] : [],
];

export const getCommonRules: (type: BuildType) => webpack.Rule[] = () => [
  {
    test: /\.svelte$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'svelte-loader',
        options: {
          emitCss: isProduction,
          preprocess: sveltePreprocess({
            postcss: {
              plugins: [
                autoprefixer({ browsers: 'last 2 versions' }),
              ],
            },
          }),
        },
      },
    ],
  },
  {
    test: /\.ts$/,
    use:
      threadLoader
        .concat({
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            happyPackMode: true,
            logLevel: 'error',
          },
        }),
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
];

export function getStyleRules(type: BuildType) {
  const cssLoaders: Record<BuildType, webpack.Loader[]> = {
    dev: ['style-loader', 'css-loader'],
    prod: [MiniCssExtractPlugin.loader, 'css-loader'],
  };

  return [
    {
      test: /\.css$/,
      use: cssLoaders[type],
    },
  ];
}

export const commonConfig: webpack.Configuration = {
  target: 'web',
  context: path.resolve(__dirname, '..', 'src'),
  output: {
    publicPath: forGHPages ? `/${pkg.name}` : '/',
    path: path.resolve(__dirname, '..', 'build'),
    filename: `js/[name]-[${chunkHash}].bundle.js`,
    chunkFilename: `js/[${chunkName}]-[${chunkHash}].bundle.js`,
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.mjs', '.js', '.ts', '.svelte'],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    hot: withHot,
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
