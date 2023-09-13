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







console.log('\n\nOBJECT DESTRUCTING')

const course={
    coursename:"js in urdu",
    price:2000,
    courseMedium:'Youtube'
}

const {courseMedium:medium}=course
console.log(medium);


// const navbar=({comapany})=>{

// }

// navbar(comapany='Ali')


// {
//     "name":"Ali murtaza",
//     "age":"22",
//     "city":"Lahore"
// }

//api link https://api.github.com/users/hiteshchoudhary
/*{
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 70,
  "public_gists": 1,
  "followers": 6177,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2023-09-09T03:27:44Z"
}*/
//https://randomuser.me/api/
// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }