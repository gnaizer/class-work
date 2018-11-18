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