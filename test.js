
//--interview qs--------01

// setTimeout(() => {
//   console.log(1);
// }, 0);
// queueMicrotask(() => {
//   console.log(2);
// });
// Promise.resolve().then(() => {
//   console.log(3);
// });
// console.log(4);

//--interview qs--------02

// const obj = {
//   x: 10,
//   y: 20,
// };
// Object.freeze(obj);
// const newObj = obj;
// newObj.x=50
// newObj.y=60
// console.log(newObj.x);
// console.log(newObj.y);

//--interview qs--------03


const fruits=["banana","apple","orange","pineapple","watermelon","coconut"];
// console.log(fruits.sort()) ///[ 'apple', 'banana', 'coconut', 'orange', 'pineapple', 'watermelon' ];
// fruits.map((fruit=>{
//       console.log(fruit)
// /
// }))



const numbers=[1,2,3,4,5,6,43,34,23,45,65,78,12];
const sorted=numbers.toSorted();
console.log(numbers)
console.log(sorted)
// const sum=numbers.reduce((x,y)=>x+y,0)
// console.log(sum)
