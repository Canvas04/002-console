const http = require("http");
const readline = require("node:readline");
const path = require("path");

const { MY_API_KEY } = require("./config.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Введите город на английском , для которого нужно вывести прогноз",
  () => {
    rl.on("line", (line) => {
      const currentCity = line;
      http.get(
        `http://api.weatherstack.com/forecast?access_key=${MY_API_KEY}&query=${currentCity}`,
        (res) => {
          const { statusCode } = res;

          if (statusCode !== 200) {
            console.log(`statusCode: ${statusCode}`);
            return;
          }

          res.setEncoding("utf-8");
          let rowData = "";
          res.on("data", (chunk) => (rowData += chunk));
          res.on("end", () => {
            let parseData = JSON.parse(rowData);
            console.log(
              `Погода ${parseData.current.temperature} градусов по Цельсию`
            );
          });
        }
      );
    });
  }
);
