// localCompare(compareString,locales,options) Method

const str = "a";
const Compare = str.localeCompare("b");       // NagativeNo. Return = -1,-2
const Compare1 = str.localeCompare("a","de"); // EqualNo Return = 0
const Compare2 = str.localeCompare("z","sv");  // NagativeNo. Return = -1,-2
const Compare3 = str.localeCompare("a","sv",{sensitivit : "base"}); // EqualNo Return = 0

console.log(Compare);
console.log(Compare1);
console.log(Compare2);
console.log(Compare3);