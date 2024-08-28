const fs = require("fs");
const http = require("http");
const url = require("url");
//Read data Sync
// const contentRead = fs.readFileSync("./txt/read-this.txt", "utf-8");
// console.log(contentRead);

// fs.writeFileSync("./txt/writeSync", "writeSync");

//Read data Async
// const readAsync = fs.readFile("./txt/input.txt", "utf-8", (err, data1) => {
//   if (err) return console.log(err);
//   fs.writeFile("./txt/writeAsyc", `${data1}`, "utf-8", (err) => {
//     if (err) console.log(err);
//     console.log("Successfully write a file");
//   });
// });
// console.log("will read file");

///////////////////////////////
/////Server

const server = http.createServer((req, res) => {
  const pathName = req.url;
  // console.log(pathName);
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is P ODUCT");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port 8000");
});
