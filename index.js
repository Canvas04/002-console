//Нужно написать вывод погоды
//В качестве параметров принимается название города для которого нужно вывести прогноз
const http = require("http");

const {MY_API_KEY} = require('./config')

const url = `https://api.weatherstack.com/forecast
? access_key = ${MY_API_KEY}
& query = New York`;

console.log(MY_API_KEY)

// const server = http.createServer((req, res) => {}).listen(3000);
