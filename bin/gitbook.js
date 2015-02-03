#! /usr/bin/env node

var color = require('bash-color');

console.log(color.red("You need to install 'gitbook-cli' to have access to the gitbook command anywhere on your system."));
console.log(color.red("If you've installe this package globally, you need to uninstall it."));
console.log(color.red(">> Run 'npm uninstall -g gitbook' then 'npm install -g gitbook-cli'"));
