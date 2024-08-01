#!/bin/bash


echo '开始创建monorepo仓库'


current_dic=$(pwd)


read -p "请输入目录名称: " folderName


mkdir "$current_dic/${folderName}"

mkdir "$current_dic/${folderName}/packages"

# 创建 pnpm-workspace.yaml 文件并写入内容
cat <<EOL > pnpm-workspace.yaml
packages: 
  - 'packages/*'
  - 'components/*'
EOL


cp pnpm-workspace.yaml "$current_dic/${folderName}"

# 清理临时文件
rm pnpm-workspace.yaml

echo "仓库已创建：$current_dic/${folderName}"


