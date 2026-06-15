let arr1 = [1, 2, 3];

let arr2 = [3, 4, 5];

const combined = [...new Set([...arr1, ...arr2])];
