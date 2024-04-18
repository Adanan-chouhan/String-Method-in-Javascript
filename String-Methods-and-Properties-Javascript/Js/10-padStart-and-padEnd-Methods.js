// padStart(targetLenght,padString);
const str = "abc";
const target = str.padStart(10);
const target1 = str.padStart(10,"foo");
const target2 = str.padStart(10,"12345678");
const target3 = str.padStart(2);  // 2 < 3

console.log(target);
console.log(target1);
console.log(target2);
console.log(target3);


//padEnd(targetLenght,padString);
const str1 = "abc"

const tr = str1.padEnd(10);
const tr1 = str1.padEnd(10,"foo");
const tr2 = str1.padEnd(10,"12345678");
const tr3 = str1.padEnd(2); //2 < 3;

console.log(tr);
console.log(tr1);
console.log(tr2);
console.log(tr3);

