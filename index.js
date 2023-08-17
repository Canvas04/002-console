//Нужно написать вывод погоды
//В качестве параметров принимается название города для которого нужно вывести прогноз
const http = require("http");
const url = require("url");

const { MY_API_KEY } = require("./config.js");

const urlForRequest = `https://api.weatherstack.com/forecast
? access_key = ${MY_API_KEY}
& query = New York`;

const layoutStart = `
  <link
    rel="stylesheet" 
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" 
    crossorigin="anonymous"
  />
    <div class="container pt-5">
`;

const server = http
  .createServer((req, res) => {
    const urlParsed = url.parse(req.url, true);
    const { pathname, query } = urlParsed;
    const { method } = req;

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if(pathname === '/') {
        res.write(layoutStart)
        res.write(`<h3>Вывод погоды по определенному городу</h3>`)
    }
  })
  .listen(3023);
