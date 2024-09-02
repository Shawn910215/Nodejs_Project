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
  const url = req.url;
  if (url === "/" || url === "/Overview") {
    res.end("This is overview");
  } else if (url === "/product") {
    res.end("This is product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Wrong page!<h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port 8000!");
});
