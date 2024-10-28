export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
      grid: true,
    },
    'postcss-pxtorem': {
      rootValue: 16, // 根元素字体大小，通常为 16px
      propList: ['*'], // 可以转换的属性，* 表示所有属性
      unitPrecision: 5, // 转换后保留的小数位数
    },
  },
}
