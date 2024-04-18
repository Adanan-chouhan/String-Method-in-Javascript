// includes() Method includes Method is used here in our string to check whether that word is in our string or not. if yes then return true if not then return false.

const sentence = "The quike brown fox jumps over the lazy dog";

const check = sentence.includes("fox");
const check1 = sentence.includes("Fox");
const check2 = sentence.includes("fox",0);
const check3 = sentence.includes("fox",16);
const check4 = sentence.includes("fox",17);

console.log(check);   // true
console.log(check1);  // false
console.log(check2);  // true
console.log(check3);  // true
console.log(check4);  // false
