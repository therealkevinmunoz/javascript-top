"use strict";

let add7 = function(number) {
    return number+=7;
};

//Testing function in console
console.log(add7(3));


let multiply = function(number1, number2) 
{
    return number1 * number2;
};

//Testing function in console
console.log(multiply(3, 8));

let capitalize = function(string) 
{

    let newString = string.toLowerCase();

    return newString.replace(newString.charAt(0), newString.charAt(0).toUpperCase());
};

//Testing function in console
console.log(capitalize("HI THERE"));
console.log(capitalize("testing this thing"));
console.log(capitalize("yeS I meanT to wRITE it LIKE This"));

let lastLetter = function(string)
{
    let newString = string.trim();
    let stringLength = newString.length;

    stringLength-=1;

    return string.charAt(stringLength);
    
}

//Testing function in console
console.log(lastLetter("testing this thing   "));
