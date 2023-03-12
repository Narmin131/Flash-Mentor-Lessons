const url = 'https://jsonplaceholder.typicode.com/todos'
const ol = document.querySelector('ol')

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            const li = document.createElement('li')
            li.innerHTML = element.title
            ol.appendChild(li)
        });

    })
    .catch(err => console.log(err))

// axios
// fetch