
// step-1 Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('submit Button Click')

    //step-2 Get the email address inside the email input field
    //always remember to use .value to get text form an input field
    const emailField = document.getElementById('user-email');
    const email =emailField.value;
    console.log(email);
    //step-3 Get Password
    //3.1 Set id on the html element
    //3.2 Get the element
    //3.3 Get the value form the element
    const passwordField =document.getElementById('user-password')
    const password =passwordField.value;
    console.log(password)

    //DANGER: Do not verify email password on the clint side
    // step-4 verify email and password
    if(email=== "mintu@gmail.com" && password=== 'sikder35'){
        window.location.href = 'bank.html';
    }
    else{
        alert('incorrect password')
    }
})
