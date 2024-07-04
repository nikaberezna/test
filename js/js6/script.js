const people = [
    {
        name: 'Anna',
        age: 25,
        zp: 2500
    },
    {
        name: 'Alex',
        age: 18,
        zp: 3500
    },
    {
        name: 'Oleg',
        age: 35,
        zp: 1500
    },
    {
        name: 'Egor',
        age: 19,
        zp: 5500
    }
]
// console.log(people)
// for(let i = 0; i <people.length; i++) {
//     if(people[i].name == 'Egor') {
//         console.log(people[i])
//     }
// }

// people.forEach(function(item) {
// console.log(item)
// })
// people.forEach(item => console.log(item))

// people.forEach(function(item, index, allArr) {
//     console.log(item)
//     console.log(index)
//     console.log(allArr)
// })
// function array() {

// }
// const array = () => {

// }
// const newPeople = people.map(item => {
//     return `${item.name} ${item.age}`
// })
// console.log(newPeople)
// const newPeople = people.map(item =>  `${item.name}(${item.age})(${item.zp})`)
// console.log(newPeople)
// const newPeople = []
// for(let i = 0; i< people.length; i++) {
//     if(people[i].age > 20) {
//         newPeople.push(people[i])
//     }
// }
// console.log(newPeople)
// const newPeople = people.filter(item => {
//     if(item.age > 20) return true
// })
// console.log(newPeople)

// const totalZp = people.reduce((result, item)=> result + item.zp,0)
// console.log(totalZp)

// const totalAge = people.reduce((result, item)=> result + item.age,0)
// console.log(totalAge)
// const index = people.findIndex(item => item.name === 'Anna')
// console.log(index)
// const sort = people.slice().sort((a,b)=> a.zp - b.zp)
// console.log(sort)

const newPeople = people.filter(item => {
    if(item.zp >= 3000) return true
})
console.log(newPeople)