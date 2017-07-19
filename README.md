# 基本webpack构建
## 其功能有：
 * 自动热加载
 * 自动分离CSS文件
 * 合并相同内容的文件
 * 多页面入口
 * 优化压缩
 ******************
 ## 插件有：
 * babili-webpack-plugin 压缩打包优化
 * extract-text-webpack-plugin 分离CSS文件单独打包
 * webpack-dev-server 热加载
 ************
 代码解释：
 * <code>"stats":"webpack --env production --profile --json > stats.json"</code>
 对于整个项目的所有包之间的关联以一个JSON文件输出
 *