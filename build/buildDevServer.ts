import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import path from 'path';


export function buildDevServer(): DevServerConfiguration {
   return {
      static: {
         directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,

   }
}

