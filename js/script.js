const btnTheme = document.getElementById('theme-button')

const change = 'active'
const darkTheme = 'dark-theme'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedStatus = localStorage.getItem('selected-status')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentStatus = () => iconTheme.classList.contains(change) ? 'active' : ''

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    btnTheme.classList[selectedStatus === '' ? 'add' : 'remove'](change)
}

btnTheme.onclick = () => {
    document.body.classList.toggle(darkTheme)
    btnTheme.classList.toggle(change)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-status', getCurrentStatus())
}