#!/usr/bin/env node

const yargs = require('yargs')

yargs.command({
  command: 'current',
  describe: 'return date in ISO format',
  handler: function (argv) {
    const date = new Date()
    if(argv.year) {
        console.log(date.getFullYear())
    }else if (argv.month) {
        console.log(date.getMonth())
    }else if(argv.date) {
        console.log(date.getDate())
    }else{
        console.log(date.toISOString())
    }
  }
})
.alias('y','year')
.alias('m','month')
.alias('d','date')

yargs.command({
    command: 'add',
    describe: 'return date in ISO format',
    builder: {
        d: {
            description: 'Add date current numbers of days',
            type:'string'
        }
    },
    handler: function (argv) {
      const date = new Date()
   if(argv.d) {
    const daysToAdd = parseInt(argv.d)

    if(!isNaN(daysToAdd)) {
        date.setDate(date.getDate() + daysToAdd)
    }
    console.log(date.toISOString())
   }

    }
  })

  

//   yargs.command({
//     command: 'sub',
//     describe: 'return date in ISO format',
//     handler: function (argv) {
//       const date = new Date()
      
//     }
//   })
//   .alias('m')


yargs.parse();
