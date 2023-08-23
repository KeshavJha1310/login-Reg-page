function validateForm() {
    // Get all input fields within the form
    var inputFields = document.querySelectorAll('input');
console.log("clicked")
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

 if (containsNumeric(firstName) && containsNumeric(middleName) && containsNumeric(lastName)) {
     alert('Username and names should not contain numeric characters.');
     return false;
 }
    // If all fields are filled, the form is valid
    return true;
}
function containsNumeric(value){
      // Use a regular expression to check for numeric characters
      return /\d/.test(value);
}