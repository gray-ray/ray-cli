#!/usr/bin/env node
// const shelljs = require('shelljs');
const prompts = require("prompts");
const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');
const fs = require('fs');

/** 初始化项目必要条件 */
function initProject () {
  return prompts([
    {
      type: "select",
      message: "please select language",
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
    // {
    //   type: "select",
    //   message: "please select package manager",
    //   name: "tool",
    //   choices: [
    //     {
    //       title: "npm",
    //       value: "npm",
    //       description: "npm package management tools",
    //     },
    //     {
    //       title: "yarn",
    //       value: "yarn",
    //       description: "yarn package management tools",
    //     },
    //     {
    //       title: "pnpm",
    //       value: "pnpm",
    //       description: "pnpm package management tools",
    //     },
    //   ],
    // },
  ]);
};

/**  项目模板下载 - github */
async function cloneTemplate (name,url) {
  return new Promise((resolve, reject) => {
    const lqProcess = ora('正在下载中...')
    lqProcess.start()
    download(`direct:${url}`, name,   { clone: true },  function (err) {
      if(err) {
        lqProcess.fail('模板下载失败');
        chalk.red(err);
        reject('模板下载失败');
      }else {
        lqProcess.succeed('模板下载成功');
        chalk.green('模板下载成功');
        resolve()
      }
    
    })
    
  }).catch(err=> {})
}

/** 目录是否存在 */
function dirExists(name, dir = './') {
  const dirs = fs.readdirSync(dir);

  if (dirs.includes(name)) {
    console.warn(chalk.bgRed("The directory already exists!")) ;
    return true;
  }
  return false;
};




module.exports = {
  initProject,
  cloneTemplate,
  dirExists
};
