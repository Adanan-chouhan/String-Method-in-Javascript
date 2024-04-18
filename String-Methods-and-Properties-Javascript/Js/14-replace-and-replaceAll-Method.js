//replce(searchString,replacerString); Method  
const text = "Mr Blue has a blue house and a blue car";
const result = text.replace("blue","red");
console.log(result);

// replce(searchString,replacerFunction);
const text1 = "Mr Blue has a blue house and a blue car";
const result1 = text1.replace("blue",(match) => {
    return match.toUpperCase();
});

console.log(result1);

// replace(regexp,replacerString);
const text2 = "Mr Blue has a blue house and a blue car";
const result2 = text2.replace(/blue/g,"red"); // g = gobal flag
console.log(result2);

// replace(regexp,replacerFunction);
const text3 = "Mr Blue has a blue house and a blue car";
const result3 = text3.replace(/blue/gi,(match) => { // g = global flag; i = iflg
    return match.toUpperCase();
});

console.log(result3);

//replaceAll(searchString,replacerString)
const text4 =  "Mr Blue has a blue house and a blue car";
const result4= text4.replaceAll("blue","red");
console.log(result4);


//replaceAll(sesrchString,replacerFunction);
const text5 = "Mr Blue has a blue house and a blue car";
const result5 = text5.replaceAll("blue",(match) => {
    return match.toUpperCase();
});

console.log(result5);

// replaceAll(regexp,replacerString);
const text6 = "Mr Blue has a blue house and a blue car";
const result6 = text6.replaceAll(/blue/g,"red"); // g = gobal flag
console.log(result6);

const text7 = "Mr Blue has a blue house and a blue car";
const result7 = text7.replaceAll(/blue/gi,(match) => { // g = global flag; i = iflg
    return match.toUpperCase();
});

console.log(result7);

// replaceAll(regexp,replacerFunction);
const text8 = "Mr Blue has a blue house and a blue car";
const result8 = text8.replaceAll("blue",(match) => { // g = global flag; i = iflg
    return match.toUpperCase();
});

console.log(result8);







