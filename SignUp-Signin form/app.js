let signinbtn = document.getElementById('signinbtn');
let signupbtn = document.getElementById('signupbtn'); 

//signup button and local Storage functionality

function signup(){
    alert('Your Code is Working')
    let userName =document.getElementById('signupuser')
    let email = document.getElementById('signupemail')
    let password = document.getElementById('signuppass')
    if(userName.value == '' && email.value == '' && password.value == ''  ){
        alert('Please fill this form');
    }
    else{
        localStorage.setItem(`name`, userName.value)
        localStorage.setItem(`email`, email.value )
        localStorage.setItem(`password`, password.value)
        alert('set item local storage is working')
        
        userName.value= ''
        email.value=''
        password.value=''
        setTimeout(() => {
            window.location.href = 'index.html '
        }, 1000) 
    }
}

// signinbtn Button functionality

signinbtn.addEventListener('click',() =>{
    var getMail = localStorage.getItem('email')
    var getPassword = localStorage.getItem('password')

    var signinEmail = document.getElementById('signemail')
    var signinPass = document.getElementById('signpass')
    alert('gets are working')
    
    if(signinEmail.value == getMail && signinPass.value == getPassword ){
        window.open('dashboard.html')
       alert('signin is working') 
    }
    else{
        alert('Please add your Correct Email and Passsword')
        signinEmail.value = ''
        signinPass.value = ''
    }
})

// go to signup page
signupbtn.addEventListener('click', () => {
    window.location.href = 'account.html'
    alert('code working')
})