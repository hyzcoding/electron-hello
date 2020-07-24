const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  // webpack配置 - 简单配置方式
  configureWebpack: {
    resolve: {
      alias: {
        // 别名
        vue$: "vue/dist/vue.esm.js", //加上这一句
        '@': resolve('src')
      }
    }
  },
  pluginOptions: { 
    electronBuilder: { 
      nodeIntegration: true, 
    }, 
  }, 
}