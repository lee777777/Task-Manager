const email = document.getElementById('email');
const form = document.getElementById('form');
var success = document.getElementById('success');
var invalid = document.getElementById('invalid');
var empty = document.getElementById('empty');
const regexEmail = /^[^@]+@\w+(\.\w+)+\w$/;
form.addEventListener('submit', (e) =>{
    e.preventDefault();
     //check if there's an input and not just empty
    if(email.value === '' || email.value == null ){

         empty.style.display = "block";
         invalid.style.display = "none";
         success.style.display = "none";
         email.style.borderBlockColor="red";
         //check if the email address is formatted correctly
    }else if(!regexEmail.test(email.value)){

        invalid.style.display = "block";
        email.style.borderBlockColor="red";
        empty.style.display = "none";
        success.style.display = "none";
     //if everything is okay, output a thank you message for subscribing
    }else{
        email.style.borderBlockColor="green";
        success.style.display = "block";
        empty.style.display = "none";
        invalid.style.display = "none";
    }
 

});