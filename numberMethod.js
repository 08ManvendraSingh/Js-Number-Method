// number method
// 1.toString()
var a=34;
document.write(a.toString()+10+ typeof a +'<br>');
console.log(a.toString()+10+ typeof a);
var a='34';
document.write(a.toString()+10+ typeof a +'<br>');
console.log(a.toString()+10+ typeof a);

// 2.toExponential()
var a=23;
document.write(a.toExponential() +'<br>');
console.log(a.toExponential());

// 3.toFixed()(not work when number are in quotes)
var a=32.57;
document.write(a.toFixed(1)+typeof a +'<br>');
console.log(a.toFixed(1)+typeof a);

// 4.toPrecision()(not work when number are in quotes)
var a=3.65;
document.write(a.toPrecision(1)+typeof a +'<br>');
console.log(a.toPrecision(1)+typeof a);

// 5.valueOf()
var a=23;
document.write(a.valueOf()+typeof a +'<br>');
console.log(a.valueOf()+typeof a);

// 6.Number()(also convert into number if number is in quotes)
var a='23.2';
document.write(Number(a)+1+typeof a+'<br>');
console.log(Number(a)+1+typeof a);
var a=23;
document.write(Number(a)+1+typeof a+'<br>');
console.log(Number(a)+1+typeof a);
var a=true;
document.write(Number(a)+1+typeof a+'<br>');
console.log(Number(a)+1+typeof a);

// 7.parseInt()(also convert into wholenumber if number is in quotes)
var a=23.4;
document.write(parseInt(a)+1+typeof a +'<br>');
console.log(parseInt(a)+1+typeof a);
var a="23.4";
document.write(parseInt(a)+1+typeof a +'<br>');
console.log(parseInt(a)+1+typeof a);

// 8.parseFloat()(also convert into number if number is in quotes)
var a=23.63;
document.write(parseFloat(a)+1+typeof a+'<br>');
console.log(parseFloat(a)+1+typeof a);
var a='23.63';
document.write(parseFloat(a)+1+typeof a+'<br>');
console.log(parseFloat(a)+1+typeof a);

// 9.number.isInteger()(not work if number is in quotes)
var a=23;
document.write(Number.isInteger(a)+typeof a+'<br>');
console.log(Number.isInteger(a)+typeof a);