$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        var email = $('#e-mail').val();
        var confirmEmail = $('#c-email').val();
        
        if (email === "" && confirmEmail === "") {
            $('.change').text('This field is required');
        } else if (email !== "" && confirmEmail === "") {
            $('#change1').text('');
            $('#change2').text('This field is required');
        } else if (email === "" && confirmEmail !== "") {
            $('#change2').text('');
            $('#change1').text('This field is required');
        } else {
            if (email === confirmEmail) {
                alert('Email has been confirmed!');
            } else {
                $('#change1').text('');
                $('#change2').text('The email addresses must match');
            }
        }
    });
});
