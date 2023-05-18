//Arrays:

//a collection of data

// const arr=[6,8,9,3];
// const arr=[6,"abc",false];
// const arr=[6,5,9,[5,7,8]];

// [
//   {
//     "id":1,
//     "item":"bus",
//     "amount":0
//   },
//   {
    
//   }
// ]

// push,pop,
//   unshift,shift()

// arr.pop();
// arrayname.method();

// //Stack

// const a=[8,9,5,7];

// const temp={id:1, name:"abc"};

// [...a,temp];
// [8,9,5,7,{id:1,name:"abc"}];
// [temp,...a];

//Merge two arrays:
const a=[7,4,8,9];
const b=[4,9,1];
const c=[...a,...b];
//c=[7,4,8,4,9,1];

a.concat(b);

"a" "b"
"ab"

//new Set-it returns unique values/elements in an array
console.log(new Set([...a]));
//[7,4,8,9];

function sort(a,b)
{
  if(a<b)
    return 1;
  else
    return -1;
}

arr.sort((a,b)=>a<b?1:-1);

const a="abc";

//["a","b","c"];
//["cbbb","bnnn","afgf"];
//["87","87576564"];
//a.split("").reverse().join("-");
//"cbbb-bnnn-afgf"

const str="i am learning javascript";
1.["i","am","learning","javascript"];
2.["javascript","learning","am","i"];
str.split(" ").reverse().join(" ");

"javascript learning am i";

a.split("").reverse().join(" ");

"tpircsavaj g ma i";

12 56 78789 80989898

//map,filter,reduce
//Higher Order Functions

function a(b)
{
  return c;
}

const temp=[7,4,8,0];

const result=temp.map((el)=>el%2====0);

result=[4,8];

temp.filter(el=>el.id!===id);

let sum=0;
for(let i=0;i<temp.length;i++)
  {
    sum=sum + temp[i];
  }
list=[
{
  id:1,
  name:"red t-shirt"
  price:30,
  amount:1
}
{
  id:2,
  name:"black tshirt",
  price:40,
  amount:1
},{
  
  }
  ]

const expense=list.reduce((total,current)=>{
  return total= total +current.price;
},0)

const balance = income-expense;
const person={
  name:"kritika"
}


list.find(el=>el.price>20);

//1st matching data

//-1

console.log(person.name);










