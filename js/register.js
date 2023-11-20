
let registerSite = document.querySelector('.register-container')
let signUp = document.querySelector('#signUp')
let login = document.querySelector('#login')
let loginSite = document.querySelector('.login-container')

console.log('Hello')
registerSite.addEventListener('mouseenter', ()=>{
    console.log('Hello')
    registerSite.classList.add('active')
    loginSite.classList.add('active')
})

loginSite.addEventListener('mouseenter', ()=>{
    console.log('Hello')
    registerSite.classList.remove('active')
    loginSite.classList.remove('active')
})

signUp.addEventListener('click', e=>{
    registerSite.classList.add('active')
    loginSite.classList.add('active')
    console.log('Register')
})

login.addEventListener('click', e=>{
    registerSite.classList.remove('active')
    loginSite.classList.remove('active')

    console.log('login')
})
