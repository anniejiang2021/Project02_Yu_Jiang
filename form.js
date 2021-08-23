

/*function validation() {alert("working");}*/
const lastname = document.querySelector("#last-name");
const firstname = document.querySelector("#first-name");
const email = document.querySelector("#email");
const telephone = document.querySelector("#telephone");
const message = document.querySelector("#message");
const form = document.querySelector(".contact-form");
const closeModal = document.querySelector("#close-modal")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const body = document.querySelector("body")


const validLastname = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/
const validFirstname = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/
const validEmail = /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/
const validTelephone = /^[0-9]+$/;


form.setAttribute("novalidate",true)
form.onsumbit = submitForm   /*onsubmit="return vslidstion(all items)"????*/

 
function submitForm(event){
    console.log("hello")
    event.preventDefault()}  //prevent the form from autosubmitting//


if (inputValid(validLastname,lastname)&&inputValid(validEmail,email)/*&&inputValid(validFirstname,firstname)
&&isEmpty(message.value)&&inputValid(validTelephone,telephone))*/) {
    console.log('Lastname: ${lastname.value}\n Email: ${email.value}')
    console.log(model);
    model.style.display="block"
}
console.log('Input are incorrect, try again.')

   /* inputValid(validName,name)
    inputValid(validEmail,email)
    function isEmpty(input) {return input.trim().length;}*/

function inputValid(regex,input) {
    return regex.test(input.value)
}

function openModal(){
    body.classlist.remove("modal-aactive")
    overlay.classlist.add("hidden")
    openModal.classlist.add("hidden")
}
/*closeModalButton.onclick =closeModal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
})*/