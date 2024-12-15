// NODEJS/ JS is a asyncronous programing language and php is syncronous lang

console.log("Start ex....");



setTimeout(()=>{
    console.log("Logic ex...."); // 2 sec.
},2000)

console.log("Complete ex....");



let a=10;
let b=20;



setTimeout(()=>{
    b=5; // 2 sec.
    console.log("a+b: ",a+b);
},2000)

console.log("a+b: ",a+b);



// resolve data async

// let a=10;
// let b=20;




let waitingData= new Promise((resolve,reject)=>{
    setTimeout(()=>{
       
        resolve(30)
    },2000)
})

waitingData.then((data)=>{
  b=data;
  console.log(a+b);
})
