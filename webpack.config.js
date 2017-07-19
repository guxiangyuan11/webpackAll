const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
// 将CSS分离成单独的文件插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
};
const plugin = new ExtractTextPlugin({
    filename: '[name].css',
    ignoreOrder: true
});
module.exports = {
    // Entries have to resolve to files! They rely on Node
    // convention by default so if a directory contains *index.js*,
    // it resolves to that.
    // devServer: {
    //     hot:true //告诉dev-server我们在使用HMR
    //     host: process.env.HOST, // Defaults to `localhost`
    //     port: 80, // Defaults to 8080
    //     overlay: {
    //         errors: true,
    //         warnings: true,
    //     },
    // },
    performance: {
        // 优化压缩
        hints: "warning",
        maxEntrypointSize: 100000,
        maxAssetSize: 450000
    },
    entry: {
        // app: PATHS.app,
        // 分组打包，另外的框架单独打包
        // vendor:['rect']
        // 多入口打包
        hello:"./app/hello.js",
        index:"./app/index.js",
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            // {
            //     test:/\.js$/,
            //     loader:'eslint-loader',
            //     enforce: 'pre',
            //     options: {
            //         emitWarning: true,
            //     }
            // },
            {
                test: /\.css$/,
                // 不必要匹配的文件
                exclude: /mode_modules/,
                use: plugin.extract({
                    use: {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        // 自动生成一个HTML文件
        // new HtmlWebpackPlugin({
        //     title: 'Webpack demo'
        // }),
        plugin,
        // 压缩插件
        new BabiliPlugin(),
        // 启用HMR
        new webpack.HotModuleReplacementPlugin()
        // 利用webpack自己的插件，将多个入口 chunk 的公共模块打包成一个文件，然后在HTML第一行引入一次缓存，后面都不用加载
        // new webpack.optimize.CommonsChunkPlugin(
        //     {
        //         name:'commons'
        //     }
        // )
    ],
};
