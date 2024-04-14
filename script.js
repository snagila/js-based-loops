// // 1. create an array of 50 random numbers range between 1 and 100 programmatically

// const arg = [];
// for (let i = 0; i < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   arg.push(num);
// }
// console.log(arg);

// // 2. sort the aray in descending order
// arg.sort((a, b) => b - a);

// // 3. get total of the array
// const ttl = arg.reduce((subTtl, num) => {
//   return subTtl + num;
// }, 0);
// console.log(ttl);

// // 4. Divide origional array into 2 new arrays that contains even and odd numbers only each'
// // even array
// const evenArg = arg.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(evenArg);

// // odd array
// const oddArg = arg.filter((item) => {
//   return item % 2 === 1;
// });
// console.log(oddArg);

// // 5. remove duplicates number from the original array
// // const uniqueArg = [...new Set(arg)];
// // console.log(uniqueArg);
// const uniqueArg = [];
// for (let i = 0; i < arg.length; i++) {
//   if (!uniqueArg.includes(arg[i])) {
//     uniqueArg.push(arg[i]);
//   }
// }

// create unique array 50 numbers range between 1 and 100 programatically

// const newArray = [];

// for (let i = 0; newArray.length < 50; i++) {
//   const num = Math.ceil(Math.random() * 100);
//   if (!newArray.includes(num)) {
//     newArray.push(num);
//   }
// }
// newArray.sort((a, b) => b - a);
// console.log(newArray);

// 1. CREATE AN ARRAY OF 50 RANDOM NUMBERS RANGE BETWEEN 1 AND 100 PROGRAMATICALLY

const arg = [];

for (let i = 0; i < 50; i++) {
  arg.push(Math.ceil(Math.random() * 100));
}
// console.log(arg);

// sort the array in descending order

arg.sort((a, b) => b - a);
// console.log(arg);

// get total of the array

const ttl = arg.reduce((subTtl, item) => {
  return subTtl + item;
}, 0);
// console.log(ttl);

// divide the array into odd and even arrays

const evenArg = arg.filter((item, i) => {
  return item % 2 === 0;
});
// console.log(evenArg);

const oddArg = arg.filter((item, i) => {
  return item % 2 === 1;
});
// console.log(oddArg);

// remove duplicates from the origional array
const newArray = [];
for (let i = 0; i < arg.length; i++) {
  if (!newArray.includes(arg[i])) {
    newArray.push(arg[i]);
  }
}
// console.log(newArray);

// creater unique array of 50 numbers ranging between 1 and 100 programatically
const uniqueArr = [];
for (let i = 0; uniqueArr.length < 50; i++) {
  const num = Math.ceil(Math.random() * 100);
  if (!uniqueArr.includes(num)) {
    uniqueArr.push(num);
  }
}
uniqueArr.sort((a, b) => a - b);
console.log(uniqueArr);
