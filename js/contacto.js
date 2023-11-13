'use extrict'

window.addEventListener('load',init,false);

function init() {
    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    btnEnviar.onclick = function() {
        email = inscriptionTxt.value;

        if (email === '') {
            Swal.fire(
                'No olvidas algo?',
                'Tu email, talvez?',
                'question'
            );
        } else if (expressionEmail.test(email)===false){
             Swal.fire(
                'Parece que algo anda mal',
                'Puede ser el email?',
                'question'
            );
        } else {
            
            var subscribe_button = document.querySelector(".subscribe_button");

            subscribe_button.addEventListener('click', function(){
              var subscribing = document.querySelector(".subscribing");
              var thanks = document.querySelector(".thanks");
              var login = document.querySelector(".login");
              subscribing.classList.add("subscribing_active");subscribe_button.classList.add("subscribe_button_active");
              setTimeout(function(){
                login.classList.add("login_active");
              }, 2000);
              setTimeout(function(){
                thanks.classList.add("thanks_active");
              }, 2900);
              setTimeout(function(){
                thanks.classList.remove("thanks_active");
                login.classList.remove("login_active");
                subscribing.classList.remove("subscribing_active");
                subscribe_button.classList.remove("subscribe_button_active");
              }, 4000);
            });
            emailjs.sendForm('service_3dm66z1', 'template_9y4gjmd', '#inscripcion','_uD5IuNGshSl8NYGX');
            cleanInputs();
        }
    }

    function cleanInputs() {
        inscriptionTxt.value = '';
    }


}