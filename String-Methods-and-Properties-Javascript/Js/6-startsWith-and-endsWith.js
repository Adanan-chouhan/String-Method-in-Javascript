// startsWith(serchStarting,Position);
const str = "cats are the best!"

const result = str.startsWith("cats");
const result1 = str.startsWith("are");
const result2 = str.startsWith("are",5);

console.log(result); // true
console.log(result1); // false
console.log(result2); // true


// endsWith(searchString,lenght);
const string = "cats are the best!"

const res = string.endsWith("best!"); // true
const res1 = string.endsWith("best");  // false
const res2 = string.endsWith("best",17); // true

console.log(res);
console.log(res1);
console.log(res2);


