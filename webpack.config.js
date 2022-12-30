const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  stats: 'minimal',
  entry: './src/pages/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].[contenthash].js' : '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'src': path.resolve(__dirname, './src'),
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
        exclude: '/node_modules/',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images',
          },
        }],
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/i,
        type: 'asset/inline',
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
          },
        }],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/pages/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? 'assets/styles/[name].[contenthash].css' : 'assets/styles/[name].css',
    }),
    new CopyPlugin({
      patterns: [{
        from: 'src/assets/static',
        to: 'assets/static'
      }]
    })
  ],
  optimization: {
    minimize: devMode ? false : true,
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  },
}
