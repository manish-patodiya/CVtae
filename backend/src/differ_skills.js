var myJson = require("../public/sample.json");
var mng = [];
var ts = [];
var ac = [];
var fd = [];
var bd = [];
var and = [];
var webd = [];

myJson.map((tr) => {
  mng.push(tr["Management Skills"]);
  ts.push(tr["Teaching Skills"]);
  ac.push(tr["Accounting Skills"]);
  and.push(tr["Android Development Skills"]);
  webd.push(tr["Web Development Skills"]);
  fd.push(tr["Front-End Skills"]);
  bd.push(tr["Back-End Skills"]);
});

var o1 = mng.filter((item, i, ar) => {
  return ar.indexOf(item) === i;
});
console.log(o1);
var o2 = ts.filter((item, i, ar) => {
  return ar.indexOf(item) === i;
});
console.log(o2);
var o3 = ac.filter((item, i, ar) => {
  return ar.indexOf(item) === i;
});
console.log(o3);
var o4 = fd.filter((item, i, ar) => {
  return ar.indexOf(item) === i;
});
console.log(o4);
var o5 = bd.filter((item, i, ar) => {
  return ar.indexOf(item) === i;
});
console.log(o5);
var o6 = webd.filter((item, i, ar) => {
  return ar.indexOf(item) === i;
});
console.log(o6);
var o7 = and.filter((item, i, ar) => {
  return ar.indexOf(item) === i;
});
console.log(o7);
