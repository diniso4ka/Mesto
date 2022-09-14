const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('webpack');




// module.exports = {
//    entry: './src/index.ts',
//    mode: 'development',
//    output: {
//       path: path.resolve(__dirname, 'dist')
//    },
//    resolve: {
//       extensions: [".tsx", ".ts", ".js"]
//    },
// }




module.exports = {
   entry: './src/index.ts',
   mode: 'production',
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
   },
   module: {
      rules: [
         { test: /\.txt$/, use: 'raw-loader' },
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
         },
         {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
               name: '[name].[ext]'
            }
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               "style-loader",
               "css-loader"
            ],
         },
         {
            test: /\.html$/,
            use: 'html-loader'
         },
      ],
   },
   plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
   resolve: {
      extensions: [".tsx", ".ts", ".js"]
   },
};