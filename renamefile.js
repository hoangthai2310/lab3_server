var fs = require('fs');

fs.rename('thongtin.txt', 'mssv.txt',function(err){
    if(err) throw err;
    console.log('FileRename')
})