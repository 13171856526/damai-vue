// 导入path模块
const path = require('path')

// 引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 引入 html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 引入 clean-webpack-plugin 删除以前的打包文件，从新打包成新文件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

// 引入 webpack 插件
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    // 打包入口
    entry: './src/main.js',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        open: true,
        hot: true,
    },
    // 打包出口
    output: {
        // 打包成bundle.js
        filename: 'bundle.js',
        // 创建一个dist文件夹 把 bundle.js 放进去
        path: path.resolve(__dirname, './dist')
    },
    // 打包规则
    module: {
        rules: [
            // 打包碰到以.vue结尾的文件 使用vue-loader的插件打包
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|jpeg|png|svg|ttf|woff|woff2|)$/,
                loader: 'file-loader',
                options: {
                    // 占位符
                    name: '[name].[ext]',
                    // 文件大小 小于设置的大小时候返回base64
                    limit: 2048
                }
            },
            {
                test: /\.css$/,
                use: [
                    // postcss-loader 自动添加各大浏览器前缀
                    // "browserslist": [
                    //     "> 1%",
                    //     "last 2 versions",
                    //     "not dead",
                    //     "defaults",
                    //     "not ie < 11",
                    //     "iOS 7",
                    //     "last 3 iOS versions"
                    //   ],
                    'style-loader', 'css-loader', 'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader', 'css-loader', 'postcss-loader', 'less-loader'
                ]
            }
        ]
    },
    // 插件
    plugins: [
        new VueLoaderPlugin(),
        // 自动生成index.html
        new HtmlWebpackPlugin({
            // 以当前路径的HTML作为模板进行打包
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
        // 模块热替换
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        // 在导入语句没带文件后缀时，webpack会自动按照顺序添加后缀名查找
        extensions: ['.js', '.vue', '.json'],
        // 别名
        alias: {
            'vue': 'vue/dist/vue.js',
        }
    }

}