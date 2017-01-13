var path = require('path');
var webpack = require('webpack');
var config = {
  entry: './main.js',   //打包的入口文件main.js

  output: {             //配置打包结果
    path: './',             //定义输出的文件夹
    filename: 'index.js'  //定义打包结果文件的名称
  },

  devServer: {          //服务器
    inline: true,
    port:8080           //设置服务器端口号
  },

  module: {                         //定义对模块的处理逻辑
    loaders: [ {                    //定义一系列加载器
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',

        query: {
          presets: ['es2015','react']
        }
    }]
  }

};
module.exports = config;
