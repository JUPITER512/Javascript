//js is dynamic type because typeof variable set during runtime



const score=100
const scoreFloat=100.211

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')


console.log(id===anotherId);
const bigNumber=BigInt(123232443412312231)
console.log(bigNumber)
//Premitive vs Non Premitive datatypes


// Premitive datatype total 7 /call by value
//String,Number,Boolearn,null,undefined,symbol,BigInt


//Non Premitive Datatype==> Reference Type
//Array,Objects,Functions

const heros=['Spiderman','Superman','IronMan']

let myInfoObj={
    name:"Ali Murtazza",
    age:"23"
}
const myfunc=function (){
    console.log("HELLO FUNCTION")
}

console.log(typeof myInfoObj)
console.log(typeof myfunc)
console.log(typeof heros)