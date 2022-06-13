const path = require('path'); // modulo path que viene nativo de node
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Genera un nuevo html con configuraciones especificas
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { envs } = require('./envsControl');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ], // incluir loaders de css
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css', // con [id] te genera un id de nombre
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/html/index.html'),
    }),
    new webpack.DefinePlugin({
      [`process.env.${envs.names.APP_NAME}`]: JSON.stringify(envs.values.prod.APP_NAME),
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
    }),
  ],
};
