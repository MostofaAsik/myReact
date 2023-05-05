// sort for array string till 2/3 line
const friend = ['asik', 'mas', 'bobita'];
console.log(friend.sort());

const num = [12, 43, 2, 44, 11, 99]
// const sortFun = (a, b) => {
//   return a - b;

// }
// console.log(num.sort(sortFun))

num.sort((a, b) => a - b)
console.log(num);

// friend.sort((a, b) => {
//   return a - b;
// });

// console.log(friend);
