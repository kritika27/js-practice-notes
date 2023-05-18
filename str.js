//Strings

// Data Types:
//   string,
//   boolean,
//   number,
//   null,
//   undefined,
//   arrays,
//   object,
//   symbol,
//   BigInt

const str="Kritika Srivastava";

console.log(str.split("").reverse().join(""));

//toLowerCase()

console.log(str.toLowerCase());

//toUpperCase

console.log(str.toUpperCase());

//Q.1: "i love javascript".
//Output: "I Love Javascript"

//"i lOve jAvAScript", "", "i","javascript"

// if(str.length===1)
//   return str.toUpperCase();
// else if(str==="")
//   return str;
// else if(str.length>1 && !str.includes(" "))
//   return str[0].toUpperCase() + str.slice(1);
  

//const str2="java";
const str2="i lOve jAvAScriPt";

let temp=str2.toLowerCase();
console.log(temp);
let temp1=temp.split(" ");
console.log(temp1);
console.log(temp1.length);
let result="";
for(let i=0;i<=temp1.length-1;i++)
  {
    if(temp1[i].length>1)
      {
      result=result + temp1[i][0].toUpperCase() +  temp1[i].slice(1) +" ";
      }
        else 
    result=result + temp1[i][0].toUpperCase() + " ";
      
  }
console.log(result.trim());


// if(str.length===1)
//  console.log(str.toUpperCase());
//  else if(str2==="")
//   console.log(str2);
// else if(str2.length>1 && !str2.includes(" "))
//   console.log(str2[0].toUpperCase() + str2.slice(1));

//Slice
  
  //Syntax of slice function:
  //stringname.slice(starting index,ending index);

  const str1="javascript";

console.log(str1.slice(4,10));

console.log(str1.slice(4));
console.log(str1.slice(-1));
console.log(str1.slice(-2));
console.log(str1.slice(-10));
console.log(str1.slice(-2200));//length beyond the length of actual string

//trim
  const str3="   typescript is good  ";

console.log(str3.trim());
//Splice

// const str4=[8,6,9,6,4,1];

// console.log(str4.splice(-1));
// console.log(str4.splice(2));
// console.log(str4.splice(1));
// console.log(str4.splice(0,4));

//slice,

//substr,substring (It will not change the original string)

let text = "Hello world!";
console.log(text.substr(1, 6)); //index stringname.substr(starting index,ending index)
console.log(text);
console.log(text.substr(1));
console.log(text.substr(-2));
//H=125, 
// let text1 = "Hello world!";
//  console.log(text1.substring(1, 4)); //stringname.substr(starting index,ending index-1)
//  console.log(text1.substring(2));
//  console.log(text1.substring(-2));
// // console.log(text1);


//charAt(), charCodeAt(), includes,startsWith,endsWith
  
  //aRRAYS,Strings, Functions, Objects
  
