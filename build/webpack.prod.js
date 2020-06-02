const baseConfig = require('./webpack.base.js')
const merge = require('webpack-merge')


const prodConfig = {
    // 生产模式
    mode: 'production',
}
module.exports = merge(baseConfig, prodConfig)