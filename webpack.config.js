const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
            
          },
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(gif|jpe?g)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]'
          }
        }],
      },

      {
        test: /\.(png|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 50000,
            //name: '[name].[ext]'
          }
        }],
      },  
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/methodology.html",
      filename: "methodology.html",
      inject: true
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/components.html",
      filename: "components.html",
      inject: true
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/layout.html",
      filename: "layout.html",
      inject: true
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
          filename: 'style.css',
          chunkFilename: '[id].css'
      
    }),
  ]
};
