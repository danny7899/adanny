const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "/assets/",
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/env",
                    "@babel/react"
                ]
            }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  },
  plugins: [
    // new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
        template: './public/index.html',
//        favicon: './public/favicon.ico'
    })
  ]
}

module.exports = config;








// const path = require('path');
// // const HtmlWebpackPlugin = require('html-webpack-plugin');
// // const CleanWebpackPlugin = require('clean-webpack-plugin');

// const outputDirectory = require('./config').rootDir;

// module.exports = {
//   mode: "production",
//   entry: "./src/index.jsx",
//   output: {
//     path: path.join(__dirname, outputDirectory),
//     filename: "script.min.js",
//     publicPath: "/"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         resolve: { extensions: [".js", ".jsx"] },
//         loader: "babel-loader",
//         options: {
//           presets: ["@babel/react"],
//           //plugins: ["transform-class-properties"]
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"]
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/,
//         loader: 'file-loader?name=assets/[name].[hash].[ext]'
//       }
//     ]
//   },
//   watch: false,   // true to enable file watching on prod mode
//   watchOptions: {
//     poll: 1000,
//     ignored: /node_modules/
//   },
//   devServer: {
//     contentBase: path.join(__dirname, outputDirectory),
//     historyApiFallback: true,
//     port: 3000,
//     publicPath: "/"
//   },
//   plugins: [
//     new CleanWebpackPlugin([outputDirectory]),
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//       favicon: './public/favicon.ico'
//     })
//   ]
// }
