const contactForm = document.querySelector(".contact-form");
let names = document.getElementById("names");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let establishment = document.getElementById("establishment");
let message = document.getElementById("message");


contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

    let formData ={
        names:names.value,
        email:email.value,
        phone:phone.value,
        establishment:establishment.value,
        message:message.value
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('email gönderimi başarılı')
            names.value = '';
            email.value = '';
            phone.value = '';
            establishment.value = '';
            message.value = '';
        } else {
            alert('İnşallah burayı görmemiş olursun')
        }
    }

    xhr.send(JSON.stringify(formData));

});
