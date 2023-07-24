#!/usr/bin/env node

const yargs = require('yargs')
const {hideBin} = require('yargs/helpers')

/**
 * Вывод даты в формате ISO при написании команды current
 */
const dateIso = new Date().toISOString()
const argv = yargs(hideBin(process.argv))
.boolean('current')
.default('current',() => {
  console.log(dateIso)
})
.argv

