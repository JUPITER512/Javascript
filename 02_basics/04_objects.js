// const tinderUser=new Object()

// const tinderUSer={}
// tinderUSer.id='124aze'
// tinderUSer.name='Syed Ali Murtaza'
// tinderUSer.isLoggedIn=false

// console.log(tinderUSer,'\n\n\n')
const regularUSer={
    'email':'SAM@GMAIL.com',
    'fullname':{
        "userFullname":{
            firstname:'Ali',
            lastname:'Murtaza'
        }
    }
}
// console.log(regularUSer.fullname.userFullname)



const obje1={
    1:'a',
    2:'b',     
}

const obje2={
    3:'a',
    4:'b',     
}
// const obje3=Object.assign({},obje1,obje2)
// const obje3=Object.assign(obje1,obje2)// const obje3=Object.assign(target =={},source obj1 , obj2 ,obj3 .....)
const obj3={...obje1,...obje2}
console.log(obj3)
const users=[{
    id:1,
    email:"syedalimurtaza36@gmail.com",
},{
    id:1,
    email:"syedalimurtaza36@gmail.com",
},{
    id:1,
    email:"syedalimurtaza36@gmail.com",
},{
    id:1,
    email:"syedalimurtaza36@gmail.com",
},]

console.log(users[1].email);
console.log(users[1].id,'\n\n\n');
console.log(regularUSer)
console.log(Object.keys(regularUSer))
console.log(Object.values(regularUSer))
console.log(Object.entries(regularUSer))
console.log(regularUSer.hasOwnProperty('fullname'))