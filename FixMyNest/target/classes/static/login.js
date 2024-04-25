$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        var formData = {
            email: $('#email').val(),
            password: $('#password').val()
        };
        $.ajax({
            type: 'POST',
            url: '/api/users/login',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(data) {
                $('#message').text('Login successful!');
                // Redirect to dashboard or perform other actions upon successful login
            },
            error: function(xhr, status, error) {
                $('#message').text('Login failed: ' + xhr.responseText);
            }
        });
    });
});
