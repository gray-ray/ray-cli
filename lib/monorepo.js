/**
 * @description monorepo 仓库生成
 */

const yaml = require('yaml');

const fs = require('fs');

function generateYaml (filePath) {
  
  const file = fs.readFileSync(filePath, "utf8");

  const doc = parseDocument(file);
}

