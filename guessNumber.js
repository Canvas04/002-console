#!/usr/bin/env node

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Загадано число в диапазоне от 0 до 100", () => {
  const guessedNumber = 76;

  rl.on("line", (line) => {
    const userInput = Number(line);
    if (userInput > guessedNumber) {
      console.log("Больше");
    } else if (userInput < guessedNumber) {
      console.log("Меньше");
    } else if (userInput === guessedNumber) {
      console.log(`Отгадано число ${guessedNumber}`);
      rl.close();
    }
  });
});
