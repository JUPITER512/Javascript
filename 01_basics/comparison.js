// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)


console.log("2">1)// it converts 2 into number first then compare
console.log("02">1) //it convers 02 into number first then compare

/*
 -*-*-*-*-*-*-*-*
 the reason is that ana equality check == and comparisons >,< 
 >= ,<=
 works differently
 comaprsions convert null to number , treating it as 0
 That's why (3) null>=0 is true and (1) null>0 is false
 same for undefined
 == vs ===
 -*-*-*-*-*-*-*-*
 */
console.log(null>0) // null=0
console.log(null==0) // null = null
console.log(null>=0) // null=0

//Strict Check

console.log("2"==2)//==>convert "2" into number 
console.log("2"===2)//==>do not convert "2" into number