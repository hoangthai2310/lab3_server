var fs = require('fs');
var data = "\n Trần Thị Thùy Dung :3 ";
fs.appendFileSync('thongtin.txt', data,'utf8');
console.log('Data is Appended to file success');