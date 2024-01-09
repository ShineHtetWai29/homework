let firstName=document.querySelector('input[name="first-name"]');
let lastName=document.querySelector('input[name="last-name"]');
let id=document.querySelector('input[name="id"]');
let email=document.querySelector('input[name="email"]');
let password=document.querySelector('input[name="password"]');
let confirmPassword=document.querySelector('input[name="confirm-password"]');


let Default = {
    'first-name' : 'First Name',
    'last-name' : 'Last Name',
    'id' : 'ID',
    'email' : 'Email',
    'password' : 'Password',
    'confirm-password' : 'ConfirmPassword',
};
let mainButton=document.querySelector('#form');

// mainButton.addEventListener('submit', e => {
//     e.preventDafault();

//     validateInput();
// });

// let validateInput = () =>{
//     for(let i=0;i<field.length;i++){
    
//         // if(field[i] != ''){
//         //     field[i].parentElement.querySelector('.error').style.display= "block";
//         //     field[i].parentElement.querySelector('.error').innerHTML = Default[field[i].getAttribute('name')] + ' is required';
//         // }

//         if(field[i] === ''){
//              setError(field[i], Default['first-name'] + ' is wrong');
//         }else{
//             setSuccess(firstName);
//         }
//     }
// };

// form -> Submit
// field -> loop -> field[i] !='' {
//     field[i].parentNode.querySelector('.error').innerHTML = Default[field[i].getAttribute('name')]   + 'is require'; //default['first-name']
// }

mainButton.addEventListener('submit', e=> {
    e.preventDefault();

    validateInput();
});

let setError = (element,message) => {
    let inputControl=element.parentElement;
    let errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText= message;
    inputControl.classList.add('.error');
    inputControl.classList.remove('.suc');
};
let setSuccess = element => {
    let inputControl=element.parentElement;
    let errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText= '';
    inputControl.classList.add('.suc');
    inputControl.classList.remove('.error');
};


let validateInput = () =>{
    let firstNameValue=firstName.value;
    let lastNameValue=lastName.value;
    let idValue=id.value;
    let emailValue=email.value;
    let passwordValue=password.value;
    let confirmPasswordValue=confirmPassword.value;

    if(firstNameValue === ''){
        setError(firstName, Default['first-name'] + ' is wrong');
    }else{
        setSuccess(firstName);
    }

    if(lastNameValue === ''){
        setError(lastName, Default['last-name'] + ' is wrong');
    }else{
        setSuccess(lastName);
    }

    if(idValue === ''){
        setError(id, Default['id'] + ' is wrong');
    }else{
        setSuccess(id);
    }

    if(emailValue === ''){
        setError(email, Default['email'] + ' is wrong');
    }else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, Default['password'] + ' is wrong');
    }else{
        setSuccess(password);
    }

    if(confirmPasswordValue === ''){
        setError(confirmPassword, Default['confirm-password'] + ' is wrong');
    }else{
        if(confirmPasswordValue != passwordValue){
            setError(confirmPassword, 'paswword is not same');
        }else{
            setSuccess(confirmPassword);
        }
        
    }

};
console.log(validateInput)

