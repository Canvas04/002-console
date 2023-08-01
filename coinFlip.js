#!/usr/bin/env node

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Игра загадывает случайное число (1 или 2). Попробуйте отгадать",
  () => {
    let random = Math.floor(Math.random() * 2);
    let resultNumber = random + 1;

    rl.on("line", (line) => {
      const userInput = Number(line);

      if(userInput !== resultNumber) {
        console.log('Попробуйте еще раз')
      }else if(userInput === resultNumber) {
         console.log('Число отгадано')
          rl.close()
      }
    });
  }
);
