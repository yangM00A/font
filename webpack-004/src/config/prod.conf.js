const path = require('path')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')//js压缩插件
const webpackConfig = require('webpack-merge') //合并配置工具
const baseConf = require('./base.conf')  //基础配置

// 打包配置
module.exports = webpackConfig.merge(baseConf, {
    plugins: [
        // 简化js（压缩）
        new uglifyjsWebpackPlugin()
    ]
})