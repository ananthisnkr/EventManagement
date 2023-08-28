
let user={};
user.name="John";
user.surname="Smith";
console.log(user);
user.name="Peter";
console.log(user);
delete user.name;
console.log(user);
let emp={
    name:"Joe",
    age:30,
    salary:3000,
    addr:{
        doorno:12,
        street:"3rd Avenue"
    }
};
let emp2 = emp;
console.log(emp2.name);
emp2.name="Hayden";
console.log(emp.name);
console.log(emp2);


/* Shallow Clone */
let empclone=Object.assign({}, emp);
empclone.addr.doorno=55;
empclone.age =29;
console.log(" cloned object ",empclone);
console.log("original emp ",emp);

/* Deep clone */

let empDeepClone=structuredClone(emp);
empDeepClone.addr.doorno=60;
empDeepClone.age =40;
console.log(" cloned object ",empDeepClone);
console.log("original emp ",emp);


/*calculator method and this keyword*/
let calculator = {
    read() { 
      this.a = +prompt("enter a", 0);
      this.b = +prompt("enter b",0);
     },
    sum(){ return this.a + this.b;},
    mul(){ return this.a * this.b;}
 
 };
 calculator.read();
 console.log(calculator.sum());
 console.log(calculator.mul());

 /*calculator Constructor and this keyword*/
 function Calculator(){
    this.read = function(){
        this.a = +prompt('a?',0);
        this.b = +prompt('b?',0);
    },
    this.add = function(){
        return this.a + this.b;
    },
    this.mul = function(){
        return this.a * this.b;
    }
    }
    let calc = new Calculator();
    calc.read();
    console.log('constr calc add',calc.add());
    console.log('constr calc mul',calc.mul());

 