// Why string to number conversion is confusing
// -*--*--*--*--*--*--*--*--*--*-OPERATIONS-*--*--*--*--*--*--*--*--*--*-
let value=3;
let negValue=-value
// console.log(negValue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)
let str1='hello'
let str2='Ali murtaza'
let str3=str1+str2
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2) //if string in start it treats otheer value such as number as a string output would be 122
console.log(1+2+"2") //if string in last then calculation opeartions in start and output would be 32
console.log("1"-2)
console.log( 1-"2")


console.log(+true)//==>converts true into 1
console.log(+"")//==>converts '' empty string into 0
// console.log(true+)//==>error converts true into 1




let number1,number2,number3;
number1=number2=number3=2+2// it will assign value to all the defined variables

let gameCounter=100
// gameCounter++;
++gameCounter;
console.log(gameCounter)