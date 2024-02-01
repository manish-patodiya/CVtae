let list = require("../public/sample-1.json");
const express = require("express");
const app = express();

const skills = require("./common");

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("", (req, res) => {
  switch (req.query.key) {
    case "all":
      res.send(JSON.stringify(list));
      break;
    case "fsd":
      let fsd = list.filter((ele) => {
        let skls = ele.Skillls.split(", ");
        if (!CommonItemsArray(skls, skills.frontend)) return false;
        if (!CommonItemsArray(skls, skills.backend)) return false;
        return true;
      });
      res.send(fsd);
      break;
    case "bd":
      let bd = list.filter((ele) => {
        let skls = ele.Skillls.split(", ");
        if (CommonItemsArray(skls, skills.backend)) return true;
      });
      res.send(bd);
      break;
    case "fd":
      fd = list.filter((ele) => {
        let skls = ele.Skillls.split(", ");
        if (CommonItemsArray(skls, skills.frontend)) return true;
      });
      res.send(fd);
      break;
    case "and":
      fd = list.filter((ele) => {
        let skls = ele.Skillls.split(", ");
        if (CommonItemsArray(skls, skills.android)) return true;
      });
      res.send(fd);
      break;
    case "mgr":
      fd = list.filter((ele) => {
        let skls = ele.Skillls.split(", ");
        if (CommonItemsArray(skls, skills.management)) return true;
      });
      res.send(fd);
      break;
    case "act":
      fd = list.filter((ele) => {
        let skls = ele.Skillls.split(", ");
        if (CommonItemsArray(skls, skills.account)) return true;
      });
      res.send(fd);
      break;
    case "tch":
      fd = list.filter((ele) => {
        let skls = ele.Skillls.split(", ");
        if (CommonItemsArray(skls, skills.teaching)) return true;
      });
      res.send(fd);
      break;
    default:
      break;
  }
});

function CommonItemsArray(array_1, array_2) {
  var commonArray = [];
  for (var i = 0; i < array_1.length; i++) {
    for (var j = 0; j < array_2.length; j++) {
      if (array_1[i] == array_2[j]) {
        commonArray.push(array_1[i]);
      }
    }
  }
  console.log(commonArray);
  return commonArray.length;
}

app.listen(5000);
