#!/usr/bin/env node

const shelljs = require('shelljs');
const path = require('path');
const fs = require('fs');

// 工具函数
export { uuid, currying} from './func'; 



const { spawn } = require('child_process');

const ora = require('ora')

const download = require('download-git-repo');

const chalk =require('chalk')

const  updateNotifier = require('update-notifier')


import { checkDir, initOptions } from './tool'

import { program } from 'commander';

import pkg from '../package.json'

program.version(pkg.version, '-v, --version');

const PROJECT_TEMPLATES = {
  vue_vite_template: 'https://github.com/gray-ray/vue-vite-template.git',
  react_vite_template:'https://github.com/gray-ray/react-vite-template.git',
  vue_webpack_template: '',
  react_webpack_template: '',
}

/**版本检查 */
program
  .command('check')
  .description('版本检查')
  .action(async() => {
    const  notifier = updateNotifier({
      pkg,
    });
    // 当检测到版本时，notifier.update 会返回 Object,  此时可以用 notifier.update.latest 获取最新版本号
    if(notifier.update) {
      console.log(`New version available: ${chalk.cyan(notifier.update.latest)}, it's recommended that you update before using.`);
      notifier.notify();
    } else {
      console.log('No new version is available.');
    }
  })

/** 项目模板下载 */
program
  .command('download <templateName>')
  .description('选择下载项目模板')
  .action(async(templateName, params) => {
    const exists = checkDir(templateName)

    if(exists) return

    const res = await initOptions()

    const url = PROJECT_TEMPLATES[res?.template]


    const lqProcess = ora('项目模板下载中...')
    lqProcess.start()

    download(`direct:${url}`, templateName,   { clone: true },  function (err) {
      if(err) {
        lqProcess.fail('模板下载失败');
        chalk.red(err);
      
      }else {
        lqProcess.succeed('模板下载成功');
        chalk.green('模板下载成功');
    
      }
    
    });
  
  });


/** 初始化monorepo 单仓库项目 */

program
  .command('monorepo')
  .description('初始化monorepo仓库')
  .action(async(name, params) => {
    // TODO: 执行sh 创建项目示例
    // // 检查是否有 bash 环境
    // if (!shelljs.which('bash')) {
    //   shelljs.echo('Sorry, this script requires bash');
    //   shelljs.exit(1);
    // }

    // // 执行 Shell 脚本
    // shelljs.exec(path.join(__dirname, 'mono.sh'), function(code, stdout, stderr) {
    //   console.log('Exit code:', code);
    //   console.log('Program output:', stdout);
    //   console.log('Program stderr:', stderr);
    // });

    // 交互式执行 Shell 脚本

    const child = spawn('bash', [path.join(__dirname, 'mono.sh')], { stdio: 'inherit' });

    child.on('exit', function (code) {
      console.log('Exit code:', code);
    });

  });



program.parse(process.argv);