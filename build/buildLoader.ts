import webpack from 'webpack'


export function buildLoaders(): webpack.RuleSetRule[] {
   const fileLoader = { test: /\.txt$/, use: 'raw-loader' }

   const cssLoader =
   {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
   }

   const typeScriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
   }

   const imageLoader = {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
         name: '[name].[ext]'
      }
   }

   const htmlLoader = {
      test: /\.html$/,
      use: 'html-loader'
   }

   return [
      fileLoader,
      typeScriptLoader,
      cssLoader,
      imageLoader,
      htmlLoader
   ]
}