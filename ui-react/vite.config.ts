import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [
    copy({
      targets: [
        {
          src: 'node_modules/oidc-client/dist/oidc-client.min.js',
          dest: 'public',
        },
      ],
      hook: 'buildStart',
      copyOnce: true,
    }),
    reactRefresh(),
  ],
  server: {
    //https: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        secure: false,
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
