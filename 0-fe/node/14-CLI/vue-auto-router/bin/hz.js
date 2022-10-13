#!/usr/bin/env node
const program = require('commander');
program.version(require('../package.json').version);

//* 创建一个命令
program.command('init <name>').description('init project').action(name => {
  console.log(name);
});

program.parse(process.argv);