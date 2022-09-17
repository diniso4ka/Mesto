import webpack from 'webpack'
const HtmlWebpackPlugin = require('html-webpack-plugin');

export function buildPlugins(): webpack.WebpackPluginInstance[] {
   return [new HtmlWebpackPlugin({ template: './src/index.html' })]
}