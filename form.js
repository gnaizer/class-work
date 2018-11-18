// function sendform() {

//     required = new array("name", "email");
//     required_show = new array("Ваше ім’я”, “електронну адресу");

//     if (document.forms[0].name.value == "") {
//         alert("Введіть будь-ласка ваше ім'я");
//         document.mailform.name.focus();
//         return false;
//     }

//     if (document.forms[0].email.value == "") {
//         alert("Введіть будь-ласка ваш мейл");
//         document.mailform.email.focus();
//         return false;
//     }

//     var i, j;


//     for (j = 0; j < required.length; j++) {
//         for (i = 0; i < document.forms[0].length; i++) {
//             if (document.forms[0].elements[i].name == required[j] && document.forms[0].elements[i].value == "") {
//                 alert("Будь ласка, введіть" + required_show[j]);
//                 document.forms[0].elements[i].focus();
//                 console.log("message allready sended");
//                 return false;
//             }
//         }
//     }

//     console.log("message allready sended");

//     return true;
// }

$(function() {
    $('form input[type=submit]').click(function(e) {
        const form = $('form')[0];
        if (!form.checkValidity()) {
            return;
        }
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/gntnaizer@gmail.com",
            method: "POST",
            data: {
                Firstname: $('#firstname').val(),
                Emailaddress: $('#email').val(),
                Message: $('#message').val()
            },
            dataType: "json"
        });
    });

});