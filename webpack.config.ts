import path from 'path';




import { buildLoaders } from './build/buildLoader'
import { buildResolvers } from './build/buildResolvers'
import { buildPlugins } from './build/buildPlugins'
import { buildDevServer } from './build/buildDevServer'



export default () => {
   const config =
   {
      entry: './src/index.ts',
      mode: 'production',
      stats: {
         children: true,
      },
      devServer: buildDevServer(),
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
   return config
};