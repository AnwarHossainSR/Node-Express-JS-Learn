const fs = require("fs");

fs.writeFileSync("notes.txt", "I live in Philadelphia. ");
fs.appendFileSync("notes.txt", "My name is Mahedi Hasan");
