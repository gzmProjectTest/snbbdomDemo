const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'xuni'
  },
  devServer: {
    // port: 8080,
    // contentBase: 'hhh',
    port: '3000', // 端口号
    inline: true, // 选项会为入口页面添加“热加载”功能，即代码改变后重新加载页面。
    hot: true // 即模块热替换，在前端代码变动的时候无需整个刷新页面，只把变化的部分替换掉。
    // proxy: {
    //     '/': {
    //         target: 'https://api/www.baidu.com',
    //         // target: 'https://api/github.com',
    //         // target: 'http://localhost:8000',
    //         // pathRewrite: {
    //         //     '^/api': '' // 替换掉代理地址中的 /api
    //         // },
    //         changeOrigin: true // 确保请求 GitHub 的主机名就是：localhost:8000 协议域名端口
    //     }
    // }
  }
};