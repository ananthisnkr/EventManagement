
//import { duplicateChar as dupch } from "stringjavascript.js";
function getinput(data)
{
    console.log("inside getinput function");
     setTimeout( ()=> console.log(`data is ${data}`), 2000);
}
//getinput("Welcome");
console.log("in global");
console.log("in global 2");
//dupch("shivesh");

/*const myprom = new Promise ((resolve,reject) => {
    console.log("starting asyn work");
    setTimeout(()=>resolve('Done!'),2000);
    
   });
   myprom.then(value=>console.log(value));
*/

//    const mypromer = new Promise ((resolve,reject) => {
//     console.log("starting asyn work");
//     reject( new Error ('Promise got rejected!'));
    
//    });
//    mypromer.catch(error=>{console.log(error)});


const myprom3 = new Promise((resolve, reject)=> {

    resolve('resolved successfully')
}
);
myprom3.then(value=>console.log(value));
myprom3.finally(value=>console.log("finally"));