document.getElementById('submite-button').addEventListener( 'click',function (){
    // console.log('submite button licked');

const userNameField = document.getElementById('user-name')
const userName = userNameField.value;
// console.log(userName);

const userPasswordField = document.getElementById('user-password')
const userPassword = userPasswordField.value;
// console.log(userpassword);


if(userName == 'rafi' && userPassword == '12345'){
    window.location.replace("banking.html");
}







})