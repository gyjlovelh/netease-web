#!/usr/bin/env bash

cd ~/Documents/angular6/netease-web/
# 安装依赖
npm config set registry http://registry.npm.taobao.org
yarn config set registry http://registry.npm.taobao.org
yarn
if [ $? == 0 ]
then echo "安装成功!"
else
echo "安装依赖出错"
exit
fi

# 升级netease-theme工程依赖
npm config set registry http://0.0.0.0:4873/
npm run upgrade
if [ $? == 0 ]
then echo "升级theme版本成功!"
else
echo "升级theme版本失败!"
exit
fi

# 执行打包命令
npm run package
if [ $? == 0 ]
then echo "构建netease-web工程成功!"
else
echo "构建netease-web工程失败!"
exit
fi




