// let mainButton=document.querySelector('.submit');

// let Default = {
//     'first-name' : 'First Name',
//     'last-name' : 'Last Name',
//     'id' : 'ID',
//     'email' : 'Email',
//     'password' : 'Password',
//     'confirm-password' : 'ConfirmPassword',
// };
// mainButton.addEventListener('submit', e  => {
//         e.preventDafault();
    
//         let field=document.querySelectorAll('[data-require]');
//         for(let i=0;i<field.length;i++){
//             if(field[i] != ''){
//                 field[i].parentElement.querySelector('.error').style.display= 'block';
//                 field[i].parentElement.querySelector('.error').innerHTML = Default[field[i].getAttribute('name')] + ' is required';
    
//             }else{
//                 field[i].parentElement.querySelector('.error').style.display= 'none';
//                 field[i].parentElement.querySelector('.error').innerHTML="";
//             }
//         }
//     });
    
    
        
        
            
                // field[i].parentElement.querySelector('.error').style.display= "block";
                
            
    
            // if(field[i] === ''){
            //      setError(field[i], Default['first-name'] + ' is wrong');
            // }else{
            //     setSuccess(field[i]);
            // }
        

    // let setError = (element,message) => {
    //     let inputControl=element.parentElement;
    //     let errorDisplay=inputControl.querySelector('.error');
    
    //     errorDisplay.innerText= message;
    //     inputControl.classList.add('.error');
    //     inputControl.classList.remove('.suc');
    // };
    // let setSuccess = element => {
    //     let inputControl=element.parentElement;
    //     let errorDisplay=inputControl.querySelector('.error');
    
    //     errorDisplay.innerText= '';
    //     inputControl.classList.add('.suc');
    //     inputControl.classList.remove('.error');
    // };
    
    // form -> Submit
    // field -> loop -> field[i] !='' {
    //     field[i].parentNode.querySelector('.error').innerHTML = Default[field[i].getAttribute('name')]   + 'is require'; //default['first-name']
    // }
    let form = document.querySelector('form');
    let err = document.querySelectorAll('.error');
    const errorTxt = {
        'first-name' : 'First Name',
        'last-name' : 'Last Name',
        'id' : 'ID',
        'email' : 'Email',
        'password' : 'Password',
        'confirm-password' : 'Confirm Password',
      }
      
      
      const reqFields = document.querySelectorAll('[data-require]');
      console.log(reqFields);
      
      
      form.addEventListener('submit', e => {
                    e.preventDefault();
                    validateInput();
      });
      const validateInput = () =>{
        for(let i=0;i<reqFields.length;i++){
            if(reqFields[i] != ''){
                reqFields[i].parentElement.querySelector('.error').style.display= 'block';
                reqFields[i].parentElement.querySelector('.error').innerHTML = errorTxt[reqFields[i].getAttribute('name')] + ' is required';
    
            }else{
                reqFields[i].parentElement.querySelector('.error').style.display= 'none';
                reqFields[i].parentElement.querySelector('.error').innerHTML="";
            }
        }
      }