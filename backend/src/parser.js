var csv = require("csvtojson");
var fs = require("fs");
var path = require("path");

var filePath = path.join(__dirname, "../public/sample.csv");
console.log(filePath);
csv()
  .fromFile(filePath)
  .then(function (jsonArrayObj) {
    fs.writeFileSync(
      path.join(__dirname, "../public/sample.json"),
      JSON.stringify(jsonArrayObj),
      (err) => {
        console.log(err);
      }
    );
  });
