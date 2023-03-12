// document.getElementsByClassName('para')
// document.getElementById('myText')
// document.getElementsByTagName('p')

// document.querySelectorAll
// document.querySelector

// Es5

// function myFunc() {
//     alert('New message')
// }

// // Es 6

// const myNewFunc = () => {

// }

// const btn = document.querySelector('button')

// btn.addEventListener('click', myFunc)

// myFunc()


const saveLocalStorage = () => {
    const myContent = document.querySelector('textarea').value
    localStorage.setItem("Text", myContent)
}

const getFromLocalStorage = () => {
    const myTextFromLocal = localStorage.getItem('Text')
    const h1 = document.querySelector('h1')
    h1.innerHTML = myTextFromLocal
}

const clearAllLocalStorage = () => {
    localStorage.clear()
}

const removeItemFromLocal = () => {
    localStorage.removeItem('Text')
}

const myObject = {
    id:3,
    name:'Narmin'
}

localStorage.setItem('object', JSON.stringify(myObject))

console.log(JSON.parse(localStorage.getItem('object')));