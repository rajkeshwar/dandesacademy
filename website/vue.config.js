/*
 * @Author: Rajkeshwar Prasad(rajkeshwar.pd@gmail.com) 
 * @Date: 2022-07-25 01:27:34 
 * @Last Modified by:   Rajkeshwar Prasad 
 * @Last Modified time: 2022-07-25 01:27:34 
 */

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/dandesacademy/" : "/",
  transpileDependencies: true,
  devServer: {
    port: 4200
  }
})
