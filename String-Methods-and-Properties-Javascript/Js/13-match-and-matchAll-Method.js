// match() Method retur string value
const text = "The rain in SPAIN stays mainly in the plain";

const res = text.match("ain");
const res1 = text.match(/ain/);
const res2 = text.match(/ain/g);
const res3 = text.match(/ain/gi);
const res4 = text.match(/w/);

console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

// macthAll()
const str =  "The rain in SPAIN stays mainly in the plain";
const r = str.matchAll(/ain/g);
const r1 = str.matchAll(/ain/gi);
const r2 = str.matchAll(/w/gi);

console.log(r);
console.log(r1);
console.log(r2);





