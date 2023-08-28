/*To reverse each word in a sentence

reverse() is for array not for string

*/

function reverseEachWord(str){

    console.log("input string "+str);
    let substr = str.split(" ").map( word => word.split("").reverse().join("")).join(" ");
    console.log("output string "+substr);

}
//reverseEachWord(" This is a very good day");


/* To display even characters in a string */

function displayEvenCh(str){
    if(str.length < 2 || str.length >100){
      console.error("invalid input");
     // break;
      
    }

    console.log("input string "+str);
    let chara = str.split("");
let res="";
    for(let i=0;i<chara.length;i+=2){
        res += chara[i]
       
    }
console.log("Output String "+res);
}

//displayEvenCh("abcdefghij");
//displayEvenCh("a");

/* number to $ format 3 = $3.00 */
function dollarFormat(str){

   console.log("$"+str.toFixed(2));

}
//dollarFormat(4);
//dollarFormat(3.8976);

/* input as string */

function dollarFormatstring(str){

   console.log("$"+str.slice(0,str.indexOf(".")+3));
 
 }
 //dollarFormatstring("3.8978");
 //dollarFormatstring("544.2787");

 /* input two string, output string with characters not common in both string
 
 solve(“xyab”,”xzca”) = “ybzc”  */

 function notCommonChar(stra, strb){

    let substra = stra.split("");
    let substrb = strb.split("");
    let resstr="";
    let res1 = substra.filter( ch => !substrb.includes(ch)).join("")+substrb.filter( ch=> !substra.includes(ch)).join("");
    
console.log(res1);
//console.log(" result ",res);

 }
//notCommonChar("abcde","cdefg");
/*to reverse a string */
function reverseString(str){
console.log(str.split("").reverse().join(""));

}
//reverseString("Ananthi");

/*You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

For example:

“Chicago”  –>  “c:**,h:*,i:*,a:*,g:*,o:*”     */

function cityName(str){

    str= str.toLowerCase(str);
    let substr = str.split("");
    let res ={};
    substr.forEach(ch => {
        if(res[ch])
           res[ch] +="*";
        else
           res[ch]= "*";
    });
        
    console.log(res);
}
//cityName("Chicago");

/*Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords(“The greatest victory is that which requires no battle”)

// should return “battle no requires which that is victory greatest The”
 */

function reverseSentence(str){
    console.log(str.split(" ").reverse().join(" "));
}
//reverseSentence("This is a very good day");

/* Return the number (count) of vowels in the given string.*/
function vowelCount(str)
{
 
    let count = str.match(/[aeiou]/gi);
console.log(count);

}
//vowelCount("Ananthi");

/* Create a function which answers the question “Are you playing banjo?”.
If your name starts with the letter “R” or lower case “r”, you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + ” plays banjo” 

name + ” does not play banjo”

Names given are always valid strings. */
function playBanjo(str){
  
    if(str.match(/[r]/i))
      console.log(str + " plays banjo");
    else{
        console.log(str + " does not play banjo");
    }
}
//playBanjo("Ram");
//playBanjo("Ananthi");

/*to print duplicate characters */
// function findDuplicate(str){

//     let substr = str.toLowerCase().split("");
//     let res ={};
//     let dup="";
//     substr.forEach( ele => {
//         if(res[ele]){
//           res[ele]+=1;
//           dup+=ele;
//         }
//           else
//           res[ele]=1;
//     });
// console.log(res);
// console.log(dup);
// }
// //findDuplicate("Ananthi");

function findDuplicate(str){
 console.log("duplicate funtion");
 let result ="";
 let duparr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
 duparr.forEach(ele => {
  result +=ele[0];
 }
    );
console.log(result);

}
//findDuplicate("Ananthi");
/*vowel and consonant count */

function vowelCons(str){
    console.log(" input string "+str);
   console.log("vowel count ",str.match(/[aeiou]/gi));
   console.log("consonanat count ",str.match(/[^aeiou]/gi).length);


}
//vowelCons("Ananthi");

/*to remove a given char from string */
function deleteChar(str,ch)
{
    console.log(str.split("").filter( ele => ele !== ch));
    
}
//deleteChar("Ananthi",'n');

function upperLower(str)
{
    console.log(str.replace(/[a-z]/gi, map(ele => { return ele.toUpperCase()} )));
}
//upperLower("AnAntHi");


function unique(arr) {
//     let newset = new Set(arr);
//     for(let val of newset)
//     {
//         console.log(val);
//     }
//   
  
  
 return Array.from(new Set(arr));
}
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
 // console.log( unique(values) ); // Hare, Krishna, :-O


/*Anagram*/

function aclean(arr){

    let clmap = new Map();
    for(let word of arr){
        clmap.set(word.toLowerCase().split("").sort().join(""),word);
    }
    console.log(Array.from(clmap.values()));
    console.log(clmap.size);

}

 let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

function sumSalaries(sal){
    let sum = 0;
    for(let sl of Object.values(sal)){
        sum+=sl;
    }
    return sum;
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  //console.log( sumSalaries(salaries) ); 

//   let date1 = new Date();
//   console.log(date1);
//   console.log(date1.getFullYear());
//   console.log(date1.getMonth());
//   console.log(date1.getTimezoneOffset());
//   console.log(date1.getDay());


  function sumton(n){
   
    if(n==1){
        return 1;
    }  
    else{
        return n+sumton(n-1);
    }

  }
  console.log(sumton(5));

  function factorial(n){
    if(n==1)
      return 1;
      else 
        return n * factorial(n-1);
  }
console.log(factorial(6));

export function duplicateChar(str){
    let substr=[...str];
    let res={};
    let dup="";
    [...str].forEach(charac => {
        if(res[charac]){
           res[charac]+=1;
            dup+=charac;
        }
        else
         res[charac]=1;
    }
        );

        console.log(dup);
}
duplicateChar("ananthi");

