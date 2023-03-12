let darkMode = localStorage.getItem('darkMode')

const enableDarkMode = () => {
    document.body.classList.add('dark')
    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkmode = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('darkMode', null)
}

const modeBtn = document.querySelector('button')

if (darkMode === 'enabled') {
    enableDarkMode()
}


const changeMode = () => {

    const darkMode = localStorage.getItem('darkMode')

    if (darkMode === 'enabled') {
        disableDarkmode()
    }
    else {
        enableDarkMode()
    }
}


modeBtn.addEventListener('click', changeMode)