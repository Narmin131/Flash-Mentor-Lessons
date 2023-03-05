// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))


// const myData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => response.json())
//         .then(myData => console.log(myData))
// }

// myData()

// setInterval(() => {
//     console.log('Salam');
// }, 1000)

// setTimeout(() => {
//     console.log('Salam');
// }, 2000)

// setTimeout(() => {
//     console.log('Salamm');
// }, 6000)

// console.log('Hello');


// const url = 'https://jsonplaceholder.typicode.com/posts'

// async function getData() {
//     try {
//         const res = fetch(url)
//             .then(response => response.json())
//             .then(data => console.log(data))
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// getData()



const url = 'https://jsonplaceholder.typicode.com/posts'
const row = document.querySelector('.row')

const getData = async () => {
    try {
        const res = await fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.forEach(element => {
                    const div = document.createElement('div')
                    div.className = 'col-lg-4 col-md-4 p-3'
                    div.innerHTML = `
                    <div class="card" style="width: 18rem;">
                   <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                  </div>
                     </div>
                    `
                    row.appendChild(div)
                });
            })
    }
    catch (err) {
        console.log(err);
    }
}

getData()