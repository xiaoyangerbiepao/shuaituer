import { defineConfig } from 'umi';
import routes from './routers'

export default defineConfig({
  routes,
  proxy: {
    '/api': {
      'target': 'http://haloworld.iicp.net:58137/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  // proxy: {
  //   '/api': {
  //     'target': 'http://localhost/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
});