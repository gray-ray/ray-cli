"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initOptions = exports.checkDir = void 0;
const fs_1 = __importDefault(require("fs"));
const prompts = require('prompts');
const chalk = require('chalk');
const checkDir = (name, dir = './') => {
    const dirArr = fs_1.default.readdirSync(dir);
    if (dirArr.includes(name)) {
        // TODO: 目录存在是否替换
        console.warn(chalk.bgRed("当前目录已存在!"));
        return true;
    }
    return false;
};
exports.checkDir = checkDir;
const initOptions = async () => {
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
    ]);
};
exports.initOptions = initOptions;
exports.default = {
    checkDir: exports.checkDir,
    initOptions: exports.initOptions
};
