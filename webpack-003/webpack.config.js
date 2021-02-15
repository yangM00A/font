const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')//js压缩插件

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {  //加载css
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ],
            },
            {   //less 转 css
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            },
            {  //处理图片
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 13000,
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    },
                ],
            },
            {   //ES6转ES5
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {   //编译vue文件
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: { //Vue 解析问题
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // 打包时自动生成index.html
        new htmlWebpackPlugin({
            template: './src/index.html',
        }),
        new uglifyjsWebpackPlugin()

    ],
    devServer:{
        contentBase:'./dist',
        inline:true
    }
}