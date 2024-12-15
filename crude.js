const fs= require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'CRUD');
const filepath=`${dirPath}/apple.txt`;


// crete and write content i file
fs.writeFileSync(filepath,'This is my file .')  


// read file withoy utf gives buffer
fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item);
})


// append file content
fs.appendFile(filepath," And this is an file",(err)=>{
    if(!err) console.log('File is updated');
})



// rename filename
 const renamfile=`${dirPath}/Fruit.txt`;
fs.rename(filepath,renamfile,(err)=>{
    if(!err) console.log('File Name is updated');
})

//delete file
fs.unlinkSync(renamfile);


// buffer=> Temporay file location