//Read data Sync
const fs = require("fs");
// const contentRead = fs.readFileSync("./txt/read-this.txt", "utf-8");
// console.log(contentRead);

// fs.writeFileSync("./txt/writeSync", "writeSync");

//Read data Async
const readAsync = fs.readFile("./txt/input.txt", "utf-8", (err, data1) => {
  if (err) return console.log(err);
  fs.writeFile("./txt/writeAsyc", `${data1}`, "utf-8", (err) => {
    if (err) console.log(err);
    console.log("Successfully write a file");
  });
});
console.log("will read file");

//Write data Async
