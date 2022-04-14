
const devConfig = {
  PUBLIC_URL: "/test_app",// 静态文件路径
}
const proConfig = {
  PUBLIC_URL: "/test_app",// 静态文件路径
  BUILD_PATH: "build", // 打包 文件夹名称
}

/**
 * env-cmd  文档地址 https://github.com/toddbluhm/env-cmd#-help
 * 命令行使用: env-cmd --verbose -e mode_name node file.js  
 * mode_name: 对应 mode 里面的 属性(key) 例如 development development_color
 * 运行结果：
 * 取出 对应 mode_name 的 值(value) Object.keys方法 把 key-value 绑定到 process.env 上
 * 如 : development(mode_name): { test : "123" }  => process.env.test = "123"
 * 最终能够在整个项目中 使用 process.env.test
 */
const mode = {

  development: devConfig,

  production: proConfig,

}


module.exports = Promise.resolve(mode)