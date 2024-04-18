// toLocalUpperCase(Local);
const lower = "istanbul";

// English us
const upper = lower.toLocaleUpperCase("en-us"); 
console.log(upper);

// Turkish
const upper1 = lower.toLocaleUpperCase("tr"); // Turkish
console.log(upper1);


// toLocalLowerCase(Local);
const upper2 = "ISTANBUL"

// English us 
const lower1 = upper2.toLocaleLowerCase("en-us");
console.log(lower1);

// Turkish
const lower2 = upper2.toLocaleLowerCase("tr");
console.log(lower2);
