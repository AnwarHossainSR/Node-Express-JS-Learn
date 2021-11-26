const request = require("request");

const url = "https://jsonplaceholder.typicode.com/todos/1";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data);
});
