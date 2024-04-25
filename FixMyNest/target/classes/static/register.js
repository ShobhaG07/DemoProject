$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault();
        var formData = {
            fullName: $('#fullName').val(),
            email: $('#email').val(),
            password: $('#password').val()
        };
        $.ajax({
            type: 'POST',
            url: '/api/users/register',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(data) {
                $('#message').text('Registration successful!');
            },
            error: function(xhr, status, error) {
                $('#message').text('Registration failed: ' + xhr.responseText);
            }
        });
    });
});
