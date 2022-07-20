// 首先导入依赖
let server = require('pushstate-server')

// 启动服务
server.start({
    port: 5019,
    directory: './dist' // 静态文件的存放位置
})

// 输出打印
console.log('your sever is running at http://localhost:5019');

