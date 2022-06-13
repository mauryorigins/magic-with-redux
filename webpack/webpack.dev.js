const path = require('path',); // modulo path que viene nativo de node
const webpack = require('webpack',);
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin',);
const HtmlWebpackPlugin = require('html-webpack-plugin',);
const { getEnv, envs, } = require('./envsControl',);

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
      directory: path.resolve(__dirname, '../src',),
    },
    port: getEnv(envs.names.PORT,) || 3000,
    open: true,
    liveReload: true,
    allowedHosts: 'all',
    historyApiFallback: true,
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
        use: ['style-loader', 'css-loader', ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html',),
    },),
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      [`process.env.${envs.names.APP_NAME}`]: JSON.stringify(envs.values.dev.APP_NAME,),
      [`process.env.${envs.names.DEBUG}`]: JSON.stringify(envs.values.dev.DEBUG,),
    },),
  ],
};
