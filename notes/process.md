### problems

- permission denied
  chmod +x  ./bin/index.js

- npm link 不生效
  需要在package.json 中配置bin 

  ``` json
  {
    "bin":{
      "ray-cli": "./bin/index.js"
    },
  }
  ```

- require() of ES Module xx not supported.

  
- require('update-notifier')  require() of ES Module  not supported.


- js 如何兼容 esModule  commonJs

- SyntaxError: Cannot use import statement outside a module

- ora - Error [ERR_REQUIRE_ESM]: require() of ES Module
  [](https://stackoverflow.com/questions/70647869/how-to-fix-bug-ora-npm)

- chalk - Error [ERR_REQUIRE_ESM]: require() of ES Module
  [](https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-module)

- node 环境下Uncaught TypeError: undefined is not a promise
  [](https://stackoverflow.com/questions/47469367/uncaught-typeerror-undefined-is-not-a-promise)


- TypeError [ERR_IMPORT_ASSERTION_TYPE_MISSING]: Module "xxx/xx.json" needs an import assertion of type "json"
   https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file

- 发布的到npm后，本地全局安装包 使用脚手架时出现 无法找到 package.json文件，但是在本地 使用npm link 或者使用 yalc 正常使用
  
  
### blog

- [](https://segmentfault.com/a/1190000039267390)

### note

- 交互依赖包替换
使用prompts 替换 inquirer

- figlet —— 生成基于 ASCII 的艺术字

###  想法
cloud ide
low code
electron
taro 