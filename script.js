let submit = document.querySelector('#submit');
let fnameField = document.querySelector('#fname');
let lnameField = document.querySelector('#lname');
let emailField = document.querySelector('#email');
let passField = document.querySelector('#pass');

let label=document.getElementsByTagName('label');

submit.addEventListener('click',()=>{
    let fname=fnameField.value;
    let lname=lnameField.value;
    let email=emailField.value; 
    let pass=passField.value;

    if(fname.trim()==''){
        fnameField.classList.add('error');
        label[0].classList.add('error');
    }
    else{
        fnameField.classList.remove('error');
        label[0].classList.remove('error');
    }

    if(lname.trim()==''){
        lnameField.classList.add('error');
        label[1].classList.add('error');
    }
    else{
        lnameField.classList.remove('error');
        label[1].classList.remove('error');
    }

    if(!(isValid(email))){
        emailField.classList.add('error');
        label[2].classList.add('error');
    }
    else{
        emailField.classList.remove('error');
        label[2].classList.remove('error');
    }

    if(pass.trim()==''){
        passField.classList.add('error');
        label[3].classList.add('error');
    }
    else{
        passField.classList.remove('error');
        label[3].classList.remove('error');
    }
});

function isValid(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    return (false)
}