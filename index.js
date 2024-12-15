const http= require('http');
const { default: test } = require('node:test');


const dataControl= (req,res)=>{
    // res.write("Hellow this is Ambuj Pandey");
    res.write("<h1>sdfghnj</h1>");
    res.end();
}


http.createServer(dataControl).listen(45001);



const colors= require('colors');

console.log("Hello Package js\n".red);
console.log("Hello Package js".bgBlue);
console.log("Ambuj Ambuj".bgGreen);



// / Create a simple Api


const http=require('http');

const data=require('./data');
http.createServer((req,resp)=>{

    resp.writeHead(200,{'Content-Type':'Application\json'});
    resp.write(JSON.stringify(data));
    resp.end();


}).listen(3000);




console.log(process.argv[3])

const fs=require('fs');
const input =process.argv;


if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])

}else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}else{
    console.log("Invalid input")
}




// Create file in folder

const fs= require('fs');

const path= require('path');

const dirPath= path.join(__dirname,'FILES'); // current directory path
console.warn(dirPath);

for(i=1;i<=5;i++){
    fs.writeFileSync(dirPath+"/Hello"+i+".txt","A Simple text file"+i);
   // fs.writeFileSync(`Hello${i}.txt`,"A Simple text file"); // or same as above
}

fs.readdir(dirPath,(err,files)=>{
         //console.warn(files);
         files.forEach((item)=>{
          console.log("files name is :",item); // print all file name from FILES folder
         })
});

