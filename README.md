# 使用vue+express搭建一个前后分离的项目（电影信息展示）

## 说明
* 第一讲，使用vue-cli和express搭建前后端工程，实现前后端工程的数据连通

## 环境

vue采用3.0.5，npm采用6.4.1，node采用8.12.0

## 使用到的相关工具和组件

* vue cli,vue router
* eslint
* express,body-parser,cors,morgan
* nodemon

## 项目工程搭建步骤

1. 创建github仓库并克隆岛本地
2. 安装vue cli工具`npm intall -g @vue/cli`
3. 使用vue脚手架工具创建前端工程`vue create client`
4. 创建后端工程 `mkdir server && cd server`，初始化工程目录`npm init -y`
5. 安装后端工程开发依赖库`npm install nodemon eslint --save-dev`
6. 安装后端工程依赖库`npm install express body-parser cors morgan --save`

## 相关资料

* [YouTube视频资料](https://www.youtube.com/watch?v=Fa4cRMaTDUI&list=PLWKjhJtqVAbnadueQ-C5keMQQiQau_i0D)
* [tab-tracker源码](https://github.com/jpantarotto/tab-tracker)