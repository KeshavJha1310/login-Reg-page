
document.addEventListener('DOMContentLoaded', function() {
    const usernameDB = [];
    const passwordDB = [];
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Call your validation functions
        var isValid = validateForm();
        if (isValid) {
            authorization();
        }
    });

   
function validateForm() {
    // Get all input fields within the form
    var inputFields = document.querySelectorAll('input');

    // Iterate through the input fields and check if they are filled
    for (var i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.trim() === '') {
            alert('Please fill in all fields.');
            return false;
        }
    }

    // Check for numeric characters in username and names
    var firstName = document.querySelector('input[name="firstName"]').value;
    var middleName = document.querySelector('input[name="middleName"]').value;
    var lastName = document.querySelector('input[name="lastName"]').value;

    if (containsNumeric(firstName) || containsNumeric(middleName) || containsNumeric(lastName)) {
        alert('Username and names should not contain numeric characters.');
        return false;
    }

    // If all fields are filled and valid, the form is valid
    return true;
}

function containsNumeric(value) {
    // Use a regular expression to check for numeric characters
    return /\d/.test(value);
}

function authorization() {
    
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;

    for (var i = 0; i < usernameDB.length; i++) {
        if (usernameDB[i] === username) {
            alert("Username Taken!");
            return false;
        }
    }

    usernameDB.push(username);
    passwordDB.push(password);
        console.log(usernameDB)
        console.log(passwordDB)
    const usernameDBasString = JSON.stringify(usernameDB)
    const passwordDBasString = JSON.stringify(passwordDB)
    localStorage.setItem("userName" ,usernameDBasString)
    localStorage.setItem("Password" , passwordDBasString)
    alert('Account created!');


    window.location.href = "http://127.0.0.1:5500/login.html";


}
});