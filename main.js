
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
signup.addEventListener('click', function() {
    signup.classList.toggle('signup-active');
    login.classList.remove('login-active');
    signActive.classList.toggle('signup-active');
    logActive.classList.remove('login-active');
  });

  const submit1 = document.getElementById('submit1')
  submit1.addEventListener('click', function(){
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
    const user = {}
    Array.from(signupForm.children)
    .filter(el => el.localName === 'input')
    .forEach(el => {
        user[el.type] = el.value
    })
    localStorage.setItem('user', JSON.stringify(user))
});
}
userData()