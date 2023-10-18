#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const shell = require('shelljs');

const update = require(`${__dirname}/../lib/update`);
const {PROJECT_TEMPLATES}  = require(`${__dirname}/../lib/constants`);

const { initProject, dirExists, cloneTemplate } = require(`${__dirname}/../lib/fn`);

/**
 * @description 快捷查询
 */
program.version(require(`${__dirname}/../package.json`).version, '-v, --version');

/**
 * @description 版本检查
 */
program
.command('check')
.description('check version').action(() => {
  update();
})


/**
 * @description 创建
 */

program
  .command('create <projectName>')
  .description('create a new project')
  .action(async (projectName, params) => {
    const isExists =  dirExists(projectName);
    if(isExists) return;
  
    const answers = await initProject();
    
    const res = await cloneTemplate(projectName, PROJECT_TEMPLATES[answers?.template]);

  });





// program
//   .command('monorepo <name>')
//   .description('create a new monorepo project')
//   .action(async (name, params) => {

//     if(!shell.which('pnpm')) {
//       shell.exec('npm i -g pnpm');
//     }

//     // TODO: 测试暂时使用
//     shell.exec(`rm -rf ${name}`);

//     const isExists =  dirExists(name);
//     if(isExists) return;
    


//     fs.writeFileSync()
 
//     // TODO:    权限不足如何处理
//     shell.mkdir(name);
    
//     shell.exec(`cd ./${name} && pnpm init`);
  
//     shell.touch(`./${name}/pnpm-workspace.yaml`)

//   });

program.parse(process.argv);