const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')//js压缩插件
const webpackConfig = require('webpack-merge')//合并配置工具
const baseConf = require('./base.conf') //基础配置

// 开发配置
module.exports = webpackConfig.merge(baseConf, {
    devServer: {
        contentBase: './dist',
        inline: true
    }
})
