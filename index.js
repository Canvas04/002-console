#!/usr/bin/env node

const yargs = require('yargs')

yargs.command({
  command: 'current',
  describe: 'return date in ISO format',
  handler: function () {
    const dateIso = new Date().toISOString()
    console.log(dateIso);
  }
});


yargs.parse();
