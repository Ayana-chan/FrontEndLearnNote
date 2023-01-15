import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [
    viteMockServe({
      mockPath: "./src/mock", // 解析，路径可根据实际变动
      localEnabled: true // 此处可以手动设置为true，也可以根据官方文档格式
    })
  ]
})
