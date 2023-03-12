// Map method
const array = [4, 6, 7, 9]

const newArray = array.map((item) => {
    return item * 3
})

console.log(newArray);

// Filter method

const Users = [
    {
        id:1,
        name:'Narmin'
    },
    {
        id:1,
        name:'Vusal'
    },
    {
        id:3,
        name:'Aisha'
    },
]

const filteredArray = Users.filter((user)=>{
    return user.id === 1
}).map(user => user.name)

console.log(filteredArray);

// Length method

console.log(Users.length);

// ForEach method

const array1 = ['Narmin', 'Vusal', 'Sabina']

const arr1 = array1.forEach(element => console.log(element))

// Find method

const arr2 = [5, 8, 13, 34, 56]

const newArr1 = arr2.find(num => num > 14)
console.log(newArr1);