import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: '@nutui/nutui-react',
          style: (name) => {
            return `@nutui/nutui-react/dist/esm/${name}/style/css`
          },
          replaceOldImport: false,
          camel2DashComponentName: false,
        }
      ]
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, './src/assets'),
      },
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 添加 .tsx 和 .ts
  },
  css: {
   
  },
})
