const arr1 = [1, 2, 2, 3];
const arr2 = [2, 2, 4];

function findIntersection(arr1, arr2) {
  let output = [];

  const set = new Set(arr2);

  for (let i = 0; i < arr1.length; i++) {
    let value = arr1[i];

    if (set.has(value)) {
      output.push(value);
    }
  }

  return [...new Set(output)];
}

console.log(findIntersection(arr1, arr2));
// Above solution is optimised because it is hash based lookup. below one is array search

// const arr1 = [1, 2, 2, 3];
// const arr2 = [2, 2, 4];

// function findIntersection(arr1, arr2) {
//   let temp = [];

//   for (let i = 0; i < arr1.length; i++) {
//     let value = arr1[i];

//     if (arr2.includes(value)) {
//       temp.push(value);
//     }
//   }

//   return [...new Set(temp)];
// }

// let intersection = findIntersection(arr1, arr2);

// console.log(intersection);
