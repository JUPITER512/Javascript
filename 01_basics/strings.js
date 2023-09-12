const name='Ali Murtaza'
const repoCount=10

// console.log(name+repoCount)

console.log(`${name} ${repoCount}`)


const gameName=new String('Apex-legends')
// console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(0))
console.log(gameName.indexOf('e'))


const newString=gameName.substring(0,4)//startnumber,endnumber
console.log(newString)//startnumber,endnumber-1



const anotherString=gameName.slice(-11,4)
console.log(anotherString+"zero")


const newString2='                ali                murtaza'
console.log(newString2)
console.log(newString2.trim())



const url='https://www.alimurtaza.com/ali%23ali'
console.log(url.replace('%23','-'))
console.log(url.includes("syed"))

const namestring='syed-ali-murtaza-bokhari'
console.log(namestring.split('-'))