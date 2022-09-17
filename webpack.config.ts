import path from 'path';
import webpack from 'webpack'
const HtmlWebpackPlugin = require('html-webpack-plugin');


import { buildLoaders } from './build/buildLoader'
import { buildResolvers } from './build/buildResolvers'
import { buildPlugins } from './build/buildPlugins'
// require('webpack');





module.exports = {
   entry: './src/index.ts',
   mode: 'production',
   stats: {
      children: true,
   },
   devServer: {
      static: {
         directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,

   },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true
   },
   module: {
      rules: buildLoaders()
   },

   plugins: buildPlugins(),
   resolve: buildResolvers()
};

// export default () => {

//    const config = {
//       entry: './src/index.ts',
//       mode: 'production',
//       stats: {
//          children: true,
//       },
//       devServer: {
//          static: {
//             directory: path.join(__dirname, 'dist'),
//          },
//          compress: true,
//          port: 3000,

//       },
//       output: {
//          path: path.resolve(__dirname, 'dist'),
//          filename: 'bundle.js',
//          clean: true
//       },
//       module: {
//          rules: buildLoaders()
//       },

//       plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
//       resolve: {
//          extensions: [".tsx", ".ts", ".js"]
//       },
//    }
//    return config
// };