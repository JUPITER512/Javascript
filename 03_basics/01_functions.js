// // basics functionalities of function

// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// // sayMyName()

// // function addTwoNumbers(number1, number2){

// //     console.log(number1 + number2);
// // }

// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// // console.log("Result: ", result);


// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))



function calculateCartPrice(...num1){
    return num1;
}
let calculatedPrice=calculateCartPrice(200,400,500)
console.log(calculatedPrice)

//passing object to function
const user={
    usrename:"Ali Murtaza",
    age:"23"
}

function handleObject(anyObject){
    console.log(`UserName ${anyObject.usrename} and age is ${anyObject.age}`);
}
handleObject(user)
handleObject({
    usrename:"SYED BOKHARI",
    age:"23",
    email:"syed@gmail.com"
})


//passing array to function
const myARR=[200,400,100,900]
function returnSecondArrValue(getARR){
    return getARR[1]
}
console.log(returnSecondArrValue(myARR))
console.log(returnSecondArrValue([1,2,3,4]))