
import fs from 'fs'
const prompts = require('prompts')
const chalk =require('chalk')


export const checkDir = (name, dir= './') => {
  const dirArr = fs.readdirSync(dir);

  if (dirArr.includes(name)) {
    // TODO: 目录存在是否替换
    console.warn(chalk.bgRed("当前目录已存在!")) ;
    return true;
  }
  return false;

}

export const initOptions = async () => {
 return prompts([
    {
      type: "select",
      message: "请选择模板",
      name: "template",
      choices: [
        {
          title: "Vue + Vite",
          value: "vue_vite_template",
          description: "vue + vite + typescript",
        },
        {
          title: "Vue + Webpack",
          value: "vue_webpack_template",
          description: "vue + webpack + typescript",
          disabled: true,
        },
        {
          title: "React + Vite",
          value: "react_vite_template",
          description: "react + vite + typescript",
        
        },
        {
          title: "React + Webpack",
          value: "react_webpack_template",
          description: "react + webpack + typescript",
          disabled: true,
        },
      ],
    },
  ])
}

export default {
  checkDir,
  initOptions
}