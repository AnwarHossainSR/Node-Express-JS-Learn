const request = require("request");

const url = "https://jsonplaceholder.typicode.com/todos";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data);
});
