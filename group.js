const uname = document.getElementById('uname');
const uname2 = document.getElementById('uname2');
const email = document.getElementById('email');
const passwrd = document.getElementById('passwrd');
const passwrd2 = document.getElementById('passwrd2');
const passwrd3 = document.getElementById('passwrd3');
const send = document.querySelector('.send');

send.addEventListener('click',checkInputs);

function checkInputs(){
   //trim
    const unameValue = uname.value.trim();
    const uname2Value = uname2.value.trim();
    const emailValue = email.value.trim();
    const passwrdValue = passwrd.value.trim();
    const passwrd2Value = passwrd2.value.trim();
    const passwrd3Value = passwrd3.value.trim();

 //username
  if (unameValue === '') {
    setErrorFor( uname,"Username required");    
  }else{
    setSuccessFor(uname);
  }
  if (uname2Value === '') {
   setErrorFor( uname2,"Username required");    
 }else{
   setSuccessFor(uname2);
 }
  //password
  if(passwrdValue === ''){
     setErrorFor(passwrd,"Password required");
  }else{
     setSuccessFor(passwrd);
  }
 //email
 if (emailValue === '') {
    setErrorFor( email,"Email Address required");
 }else {
    setSuccessFor(email);    
 }
 //password2
  if(passwrd2Value === ''){
     setErrorFor(passwrd2,"Password required");
  }else if(passwrdValue !== passwrd2Value){
     setErrorFor(passwrd2,'Wrong password');
  }else{
     setSuccessFor(passwrd2);
  }
 //password3
 if(passwrd3Value === ''){
   setErrorFor(passwrd3,"Password required");
}else{
   setSuccessFor(passwrd3);
} 
  
}
function setErrorFor(input, message) {
   const validate = input.parentElement;
   const small = validate.querySelector('small');
   validate.className = 'validate error';
   small.innerText = message ;
}
function setSuccessFor(input){
   const validate = input.parentElement;
   validate.className = 'validate success';
}