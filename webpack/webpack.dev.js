const path = require('path'); // modulo path que viene nativo de node
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// ---Env variables
const { devEnvs } = require('../env/dev');
const { envsParser } = require('../env/configs/envsParser');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    // new
    client: {
      logging: 'info',
      overlay: true,
      progress: true,
      reconnect: true,
    },
    static: {
      directory: path.resolve(__dirname, '../src'),
    },
    port: devEnvs.REACT_APP_PORT || 3000,
    open: true,
    liveReload: true,
    allowedHosts: 'all',
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, '../src/css/colors.less')],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin(envsParser(devEnvs)),
  ],
};
