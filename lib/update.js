// 引用 update-notifier 库，用于检查更

// 引用 chalk 库，用于控制台字符样式
const chalk = require('chalk');


// updateNotifier 是 update-notifier 的方法，其他方法可到 npm
// const  notifier = updateNotifier({
//   pkg,
//   updateCheckInterval: 1000, // 默认一天
// });


async function  updateCheck() {
  const updateNotifier =  await (await import('update-notifier')).default;
  const  notifier = updateNotifier({
    pkg: require('../package.json'),
  });
 
  // 当检测到版本时，notifier.update 会返回 Object,  此时可以用 notifier.update.latest 获取最新版本号
  if(notifier.update) {
    console.log(`New version available: ${chalk.cyan(notifier.update.latest)}, it's recommended that you update before using.`);
    notifier.notify();
  } else {
    console.log('No new version is available.');
  }
}


module.exports = updateCheck;


