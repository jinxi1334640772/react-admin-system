#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd build

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

git init
git add -A
git commit -m 'deploy'
git branch -M master
# git push -f "https://${access_token}@github.com/jinxi1334640772/vue-admin-system.git" master:deploy
git push -f "https://github.com/jinxi1334640772/react-admin-system.git" master:deploy

cd -

echo https://github.com/jinxi1334640772/react-admin-system.git
