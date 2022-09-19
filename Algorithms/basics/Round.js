// make a function that rounds a number to a certain number of decimal places

function round(num, places) {
    return +(Math.round(num + "e+" + places) + "e-" + places); 
    }

// Example
let rounded = round(1.2356789, 2); // 1.24

console.log(rounded);



