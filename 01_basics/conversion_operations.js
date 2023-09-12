let score="33abc";

console.log(typeof score)
console.log(typeof(score) )

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33"=number
//"33abc" or undefined=NaN
// true or false= 1 or 0
//Number(score) for string (33abc) and undefiend when we try to convert it into number it returns typeof number but when we print the value it gives NaN
//Number(score) for null when we try to convert it into number it converts and return the value 0
//Number(score) for boolean true it converts it into 1 and for false it gives 0



// let isLoggedIn=1==>true
// let isloggedIn=0==>false
// let isloggedIn=''==>false
let isloggedIn='ALi Murtaza'
let booleanIsLoggedIn=Boolean(isloggedIn)
console.log(booleanIsLoggedIn)


// let someNumber=33==>can convert into string
// let someboolean=true;==>can convert into string
// let someboolean=NaN==>can be convert into string
let someValue= String(someboolean)
console.log(someValue)
console.log(typeof someValue)