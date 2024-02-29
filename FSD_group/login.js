const wrapper=document.querySelector('.wrapper');
const login=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin-popup');
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

const iconClose = document.querySelector('.icon-close');

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>
{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>
{
    wrapper.classList.remove('active-popup');
});