// var c=2021
let a=300
if (true){
    let a=10
    const b=20
    // console.log("INNER: ",a)
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];   
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const userName='Ali Murtaza'
    function two(){
        const website='youtube'
        // console.log(userName)
    }
    // console.log(website)
    two()
}
one()
if (true){
    const username='ALi'
    if(username=='ALi'){
        const website=' Youtube'
        // console.log(`${username} ${website}`)
    }
    // console.log(website)
}
// console.log(username)

console.log(addone(5))
function addone(value){
    return value+1;
}
console.log(addtwo(5));
const addtwo=function(num){
    return num+2;
}

// cos




