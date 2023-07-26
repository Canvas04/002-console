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

// yargs.command({
//     command: 'add',
//     describe: 'return date in ISO format',
//     handler: function (argv) {
//       const date = new Date()
//         const a = date.setDate(date.getDate() + 2)   
//         console.log(date)   
 
//         if(argv.d){
//             console.log(1)
//         }
//     }
//   })
//   .alias('d')

//   yargs.command({
//     command: 'sub',
//     describe: 'return date in ISO format',
//     handler: function (argv) {
//       const date = new Date()
      
//     }
//   })
//   .alias('m')


yargs.parse();
