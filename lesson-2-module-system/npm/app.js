const validator = require("validator");
const chalk = require("chalk");

// console.log(validator.isEmail("mahedianwar@Gmail.com"));
// console.log(chalk.blue("error"));

const command = process.argv[2];

console.log(process.argv);

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
