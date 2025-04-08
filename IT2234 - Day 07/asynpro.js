const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data)=>{
    if(err){
        console.error(err);
        console.log("No such file founded...");
        return 0;
    }
    console.log("File reading completed");
    console.log(data);
});

