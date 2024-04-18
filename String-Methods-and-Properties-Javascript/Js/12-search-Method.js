// search() Method return indexNO
const text = "The rain in SPAIN stays mainly in the plian";

const positon = text.search("ain");
const positon1 = text.search(/ain/);
const positon2 = text.search(/AIN/);
const positon3 = text.search(/AIN/i);
const positon4 = text.search(/w/);

console.log(positon);  // 5     
console.log(positon1); // 5  
console.log(positon2); // 14  
console.log(positon3); // 5 
console.log(positon4); // -1





