
const login = document.getElementById('login');
const signup = document.getElementById('signup');
const logActive = document.getElementById('logActive')
const signActive = document.getElementById('signActive')

login.addEventListener('click', function() {
    login.classList.toggle('login-active');
    signup.classList.remove('signup-active');
    logActive.classList.toggle('login-active');
    signActive.classList.remove('signup-active');

});
signup.addEventListener('click', () => {
    signup.classList.toggle('signup-active');
    login.classList.remove('login-active');
    signActive.classList.toggle('signup-active');
    logActive.classList.remove('login-active');
  });

  const submit1 = document.getElementById('submit1')
  submit1.addEventListener('click', () => {
      signActive.classList.remove('signup-active')
      logActive.classList.toggle('login-active')
      login.classList.toggle('signup-active')
      signup.classList.remove('signup-active')
  })

  const check = () => {
    if(window.location.pathname === '/'){
        if(localStorage.getItem('user') === null){
     signActive.classList.add('signup-active')
        }
    }
  }
  check()
const userData = () => {
const signupForm = document.getElementById('signActive')
signupForm && signupForm.addEventListener('submit', (event) => {
    event.preventDefault()
    location.reload()
    const user = {}
    Array.from(signupForm.children)
    .filter(el => el.localName === 'input')
    .forEach(el => {
        user[el.type] = el.value
        console.log(JSON.parse(localStorage.getItem('user')));
    })
    localStorage.setItem('user', JSON.stringify(user))
});
}
userData()
const userLogin = () => {
const userDataDraw = document.getElementById('loginIn')
const userIn = JSON.parse(localStorage.getItem('user'))

const userNumber = document.createElement('div')
userNumber.textContent = `Phone: ${userIn.tel}`

const userName = document.createElement('div')
userName.textContent = `Username: ${userIn.text}`

userDataDraw.appendChild(userNumber)
userDataDraw.appendChild(userName)

logActive.addEventListener('submit', () => {
    if(userIn.email  === logActive.children[0].value){
        if (userIn.password === logActive.children[1].value) {
            userDataDraw.style = 'display: flex;'
            login.style = 'display: none'
            signup.style = 'display: none'
            logActive.style = 'display: none'
            signActive.style = 'display: none'
        }else{
            alert('Неправильный логин или пароль')
        }
    }else{
        alert('Неправильный логин или пароль')
    }
    console.log(logActive.children[0].value);
})

}
userLogin()


