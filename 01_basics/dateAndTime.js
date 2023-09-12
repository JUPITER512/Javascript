// Date

let mydate=new Date()

// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.toUTCString())
// console.log(typeof mydate)


// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,5,3)
// let myCreatedDate=new Date("2023-01-14")//yy/mm/yyyy
let myCreatedDate=new Date("01-14-2023")//mm//dd/yyyy
// console.log(myCreatedDate.toLocaleString())
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))//=to get seconds






//-*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*-

let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.toLocaleDateString('default',{
    weekday:"long",
}))