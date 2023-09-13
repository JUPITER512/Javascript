//singleton

//object literals

const  mykey=Symbol("key1")
// Object.create==>constructor method
const jsUser={
    name:"Ali Murtaza",//system process keys as strings "name":"Ali Murtaza"
    "fullname":"SYED ALI MURTAZA",//this can't be access by using dot notation object.keyname x
    [mykey]:"HELLO KEY1",//==> symbol only can be declare inside the object with square brackets on key side ['key']:value
    age:22,
    location:"Lahore",
    email:"syedalimurtaza36@gmail.com",
    isLoggedIn:"false",
    lastLoginDays:["Monday","Saturday"]
}

//first way to access the values in keys but second way is preferable
console.log(jsUser.name);
console.log(jsUser.lastLoginDays);
//second way to access the values in keys
console.log(jsUser['email']);
console.log(jsUser['age'])

console.log(jsUser['fullname'])
//to access symbol from object we do not need to give inverted commas
console.log(jsUser[mykey])

//to overwrite values we can use following method
jsUser.fullname='Syed Ali murtaza Bokhari'
// to lock the object such that no one can change the values inside the object we can use object.freeze method
// Object.freeze(jsUser)
jsUser.fullname='Syed Ali Bokhari'
console.log(jsUser['fullname'])
console.table(jsUser)
console.log(jsUser)
console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');


//adding a key inside object

jsUser.greeting=function(){
    console.log("Hello Js User")
}
jsUser.greetingtwo=function(){
    console.log(`Hello Js User ,${this.fullname}`)
}
console.log(jsUser)
console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())
console.log(jsUser['greeting']);