const  userNameInputEl = document.getElementById ('username');
const  passwordInputEl = document.getElementById ('password');
const  confirmPasswordInputEl = document.getElementById('confirm-password');
const loginInputEl = document.getElementById('login-btn');
const userForm = document.getElementById('main-form');
// const formInput = document.querySelector('.form-input');

const inputElements = [userNameInputEl,passwordInputEl,confirmPasswordInputEl];

//functions
function showError(element,message){
    element.className=('form-input error');
    const inputContainer = element.parentElement;
    const messageEl = inputContainer.querySelector('.message');
    messageEl.classList.add('error');
    messageEl.innerText = message;
}
function showSuccess(element){
    element.classList.add('success');
        const inputContainer = element.parentElement;
        const messageEl = inputContainer.querySelector('.message');
        messageEl.classList.remove('error');
}
function checkMandatory(arrElements){
    for(let i=0; i< arrElements.length; i++){
        if(!arrElements[i].value){
            console.log(arrElements[i].name)
            showError(arrElements[i], `${arrElements[i].name} Required`)
        }else{
            showSuccess(arrElements[i])
        }
    }
}
function checkLength(element,minLength,maxLength){
    const value = element.value;
    const name = element.name;
    if(value.length<minLength){
        showError(element,`${name} should be more than ${minLength} characters`);
    }else if(value.length > maxLength){
        showError(element,`${name} should be less than ${maxLength} characters`);
    }else{
        showSuccess(element);
    }
}
const validatePassword =(password)=>{
    return String(password).match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
}
function checkPassword(element) {
    const value = element.value;
    console.log(value)
    if (!validatePassword(value)) {
        showError(element, 'Enter Valid Password');
    }else{
        showSuccess(element);
    }
}


userForm.addEventListener('submit', function(event){
    event.preventDefault();
    const userName = userNameInputEl.value; 
    const password = passwordInputEl.value;
    const confirmPassword = confirmPasswordInputEl.value;
    // const loginBtn = loginInputEl.value;

    checkMandatory(inputElements);
    checkLength(userNameInputEl,4,16);
    checkPassword(passwordInputEl);
    
    if(password !== confirmPassword){
        showError(confirmPasswordInputEl,'Invalid Password');
    }else{
        showSuccess(confirmPasswordInputEl);
    }
    
});

