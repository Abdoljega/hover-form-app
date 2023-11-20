
let registerSite = document.querySelector('.register-container')
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

