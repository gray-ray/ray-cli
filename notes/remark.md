使用 `typescript` 解决文件同时使用 commonjs 与  esModule 兼容问题
- 安装  `npm i -D typescript ts-node @types/node`


- 初始化 `tsc --init` 


- 修改 `tsconfig.json`
  > 需要注意点
  >"target": "ES2020",
  >"module": "CommonJS",
  
``` json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
   "target": "ES2020",
   "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["dist", "node_modules"]
}
```

- 修改  `package.json` 
``` json
{
  "main": "./dist/index.js",
  "scripts": {
    "start": "ts-node src/index.ts",
    "build": "tsc -p tsconfig.json"
  },
  "bin": {
    "ray-tool-cli": "dist/index.js"
  },
}
```


- 使用ts-node执行typescript代码时会出现"Cannot use import statement outside a module“错误

`ts-node -P tsconfig.json` 
https://cloud.tencent.com/developer/ask/sof/483722
https://www.npmjs.com/package/ts-node#cli-options 


- chalk 在ts中报错
chalk 在ts中 require() of ES Module XXX not supported

 Chalk 5 is ESM. If you want to use Chalk with TypeScript or a build tool, you will probably want to use Chalk 4 for now.

 `npm uninstall chalk` 

 `npm i chalk@4.1.2`

 再使用commonjs引入

https://stackoverflow.com/questions/70309135/chalk-error-err-require-esm-require-of-es-module


- ora 在ts中报错 错误同上
  [issue](https://github.com/sindresorhus/ora/issues/183)
  降低 版本解决 https://github.com/sindresorhus/ora/releases/tag/5.4.1

- update-notifier 在ts中报错 错误同上
    [5.1.0版本](https://github.com/yeoman/update-notifier/releases/tag/v5.1.0)
  [text](https://github.com/yeoman/update-notifier/issues/172)



### 调试

2种调试方法
1. `npm run start  download` 
2. `npm  run build `   `npm link`  `ray-tool-cli XX`



  [loading](https://www.npmjs.com/package/ora)

- yaml
  [yaml文件生成解析](https://www.npmjs.com/package/yaml)

- ts-node
  ts-node 是一个 TypeScript 执行引擎，能让我们在 Node.js 环境下直接运行 TypeScript 代码