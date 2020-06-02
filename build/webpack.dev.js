const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')

// 引入 webpack 插件
const webpack = require('webpack')

const devConfig = {
    // 开发模式
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: "./dist",
        open: true,
        hot: true,
    },
    // 插件
    plugins: [
        // 模块热替换
        new webpack.HotModuleReplacementPlugin(),
    ],
}
module.exports = merge(baseConfig, devConfig)